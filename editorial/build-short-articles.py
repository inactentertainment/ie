from pathlib import Path
import json,re,html,math,sys,random
from shared_footer import footer_markup
P=Path('output'); E=html.escape
articles=json.loads((P/'editorial/short-articles.json').read_text())
def banner(a):
 kind=a['course']; shapes=''
 if kind=='music-ai':
  shapes=''.join(f'<rect class="visual-bar" style="animation-delay:{i*.15}s;transform-origin:{60+i*40}px 142px" x="{60+i*40}" y="{142-h}" width="20" height="{h}" rx="6"/>' for i,h in enumerate([28,55,83,46,110,76,42,91]))
 elif kind=='small-business':
  shapes='<path d="M55 140 H410 M55 140 V40" fill="none" stroke="white" opacity=".3"/>'+''.join(f'<rect class="visual-bar" style="animation-delay:{i*.3}s;transform-origin:{80+i*70}px 138px" x="{80+i*70}" y="{138-h}" width="38" height="{h}" rx="5"/>' for i,h in enumerate([28,51,76,100]))
 else:
  shapes='<path d="M80 92 H390" stroke="white" stroke-width="2" opacity=".4"/>'+''.join(f'<circle class="visual-dot" style="animation-delay:{i*.7}s" cx="{90+i*140}" cy="92" r="24"/><text x="{90+i*140}" y="150" text-anchor="middle" fill="white" font-size="15">{label}</text>' for i,label in enumerate(['Brief','Draft','Review']))
 return f'<svg class="article-visual" viewBox="0 0 470 190" role="img" aria-label="Animated illustration for {E(a["topic"])}"><rect width="470" height="190" rx="20" fill="{a["tint"]}"/><g fill="#d6deea">{shapes}</g></svg>'
cards=''.join(f'<a class="article-library-card" href="articles/{a["slug"]}.html" style="--article-tint:{a["tint"]}"'+(' hidden data-more-article' if articles.index(a)>2 else '')+f'>{banner(a)}<span class="eyebrow">{E(a["topic"])}</span><h3>{E(a["title"])}</h3><p>{E(a["deck"])}</p><span class="article-card-cta">Read the article →</span></a>' for a in articles)
section='<section class="section" id="articles" aria-labelledby="articles-title"><div class="section-head"><div><span class="eyebrow">InAct Articles · We like to learn</span><h2 id="articles-title">A little curiosity.<br>A useful next step.</h2></div><p>Conversational reads that teach one useful idea. Explore at your pace, with an optional three-question check at the end.</p></div><div class="article-library-grid">'+cards+'</div><div class="article-library-actions"><button class="platinum" type="button" id="view-all-articles" aria-expanded="false">View all '+str(len(articles))+' articles →</button></div></section>'
if '--home' in sys.argv:
 path=P/'prototype-template.html'; template=path.read_text();template=re.sub(r'<section class="section" id="articles".*?</section>','',template,flags=re.S)
 marker=re.search(r'<section[^>]*id="contact"[^>]*>',template)
 if not marker: raise RuntimeError('Contact section not found')
 template=template[:marker.start()]+section+template[marker.start():];template=template.replace('</body>','<script src="assets/article-library.js"></script></body>') if 'assets/article-library.js' not in template else template;path.write_text(template);print('Inserted '+str(len(articles))+' Articles cards');sys.exit()
home=(P/'index.html').read_text();header=re.search(r'<header>.*?</header>',home,re.S)[0]
for anchor in ['top','our-world','courses','articles','resources','contact']:header=header.replace('href="#'+anchor+'"','href="../index.html'+('' if anchor=='top' else '#'+anchor)+'"')
header=header.replace('href="music.html"','href="../music.html"');header=header.replace('href="services.html"','href="../services.html"').replace('src="assets/','src="../assets/').replace('data-logo="ie"','src="../assets/ie-logo.svg"')
release=re.search(r'<aside class="release-panel".*?</aside>',home,re.S)[0];release=re.sub(r'src="data:image/jpeg;base64,[^"]+"','src="../assets/release-cover.svg"',release)
for a in articles:
 chapters=''
 for i,s in enumerate(a['sections']):
  chapters+=f'<section class="chapter"><div class="chapter-heading"><span class="eyebrow">An idea to use</span><h2>{E(s["title"])}</h2></div><div class="prose">'+''.join('<p>'+E(p)+'</p>' for p in s['paragraphs'])+'</div></section>'
  if i==1: chapters+='<aside class="pull-insight">'+E(a['takeaway'])+'</aside>'
  if i==2: chapters+='<figure class="design-placement" data-affiliate-slot="article-midpoint" aria-label="Decorative design panel"><svg viewBox="0 0 720 100" aria-hidden="true"><defs><linearGradient id="silver"><stop stop-color="#363a41"/><stop offset=".5" stop-color="#bdc7d7"/><stop offset="1" stop-color="#262a31"/></linearGradient></defs><path d="M0 80 Q180 0 360 60 T720 25" fill="none" stroke="url(#silver)" stroke-width="2"/><circle cx="360" cy="60" r="16" fill="none" stroke="#d9dfe8"/><circle cx="360" cy="60" r="5" fill="#d9dfe8"/></svg><figcaption>Make room for the next idea.</figcaption></figure>'
 questions=''
 for i,q in enumerate(a['questions']):
  order=list(range(len(q['options'])));random.Random(a['slug']+str(i)).shuffle(order)
  options=''.join(f'<label><input type="checkbox" value="{j}"><span>{E(q["options"][j])}</span></label>' for j in order)
  questions+=f'<fieldset data-question="{i}" data-correct="{",".join(map(str,q["correct"]))}"><legend>{i+1}. {E(q["question"])}</legend><p class="small">Select three answers.</p><div class="quiz-choices">{options}</div><p class="quiz-feedback" hidden>{E(q["feedback"])}</p></fieldset>'
 quiz='<section class="short-quiz" aria-labelledby="quiz-title"><span class="eyebrow">Optional understanding check</span><h2 id="quiz-title">Three questions. One useful takeaway.</h2><p>Select three answers for each question, then check your choices. You can read and explore the whole article without taking this check.</p><form id="article-check">'+questions+'<div class="reader-actions"><button class="platinum" type="submit">Check my answers →</button></div><p id="quiz-result" role="status"></p></form></section>'
 sources='<section class="references"><h2>References and further reading.</h2><p>Original InAct explanation and examples, informed by these primary sources.</p><ol>'+''.join('<li><a href="'+E(url)+'" target="_blank" rel="noopener noreferrer">'+E(label)+'</a></li>' for label,url in a['sources'])+'</ol></section>'
 words=sum(len(p.split()) for s in a['sections'] for p in s['paragraphs']);minutes=math.ceil(words/180)
 links=''.join('<link rel="stylesheet" href="../assets/'+x+'">' for x in ['site.css','article.css','courses.css','learning-ui.css','read-aloud.css','brand-refresh.css','short-article.css'])
 page='<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+E(a['title'])+' | InAct Articles</title><meta name="description" content="'+E(a['deck'])+'"><link rel="canonical" href="https://inactentertainment.github.io/ie/articles/'+a['slug']+'.html">'+links+'</head><body class="article-page short-article" id="top" data-course="'+a['course']+'"><a class="skip" href="#article-main">Skip to article</a>'+header+release+'<main class="article-shell" id="article-main"><div class="article-hero"><span class="eyebrow">InAct Articles · '+E(a['topic'])+'</span><h1>'+E(a['title'])+'</h1><p class="deck">'+E(a['deck'])+'</p><p class="small">InAct Entertainment · '+str(minutes)+' minute read · Updated October 9, 2026</p><div class="reader-actions"><a class="outline" href="../index.html#articles">All articles →</a><button class="platinum" id="lights-toggle" aria-pressed="false">Lights on ☀</button></div>'+banner(a)+'</div>'+chapters+quiz+sources+'<section class="keep-learning"><span class="eyebrow">Keep learning with InAct</span><h2>Take the idea further.</h2><p>A fuller course offers more practice, examples, and a path into your own project.</p><div class="reader-actions"><a class="platinum" href="../courses/'+a['course']+'.html">Explore the related course →</a><a class="outline" href="../index.html#articles">Return to articles →</a></div></section></main>'+footer_markup(home)+'<div class="toast" id="toast" hidden role="status"></div>'+''.join('<script src="../assets/'+x+'"></script>' for x in ['site.js','footer.js','learning-ui.js','read-aloud.js','short-article.js'])+'</body></html>'
 (P/'articles'/f'{a["slug"]}.html').write_text(page)
 print(a['slug'],words,'words')
# Keep the public sitemap in step with the new independent pages.
sitemap=P/'sitemap.xml'
if sitemap.exists():
 s=sitemap.read_text()
 for a in articles:
  url='https://inactentertainment.github.io/ie/articles/'+a['slug']+'.html'
  if url not in s:s=s.replace('</urlset>','<url><loc>'+url+'</loc></url></urlset>')
 sitemap.write_text(s)
