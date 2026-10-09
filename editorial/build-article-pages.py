from pathlib import Path
import json,re,html,base64,subprocess
E=html.escape
from video_markup import watch_section
from shared_footer import footer_markup
from learning_design import learning_markup
articles=json.loads(Path('output/editorial/all-articles.json').read_text());home=Path('output/inact-homepage-prototype.html').read_text();assets=Path('output/assets');assets.mkdir(exist_ok=True);out=Path('output/articles');out.mkdir(exist_ok=True)
# The page header, player markup, styles, and player logic come from the homepage source.
css=re.search(r'<style>(.*?)</style>',home,re.S)[1];(assets/'site.css').write_text(css)
header=re.search(r'<header>.*?</header>',home,re.S)[0]
header=header.replace('href="#top"','href="../index.html"').replace('href="#our-world"','href="../index.html#our-world"').replace('href="#insights"','href="../index.html#courses"').replace('href="#courses"','href="../index.html#courses"').replace('href="#contact"','href="../index.html#contact"').replace('href="#resources"','href="../index.html#resources"').replace('href="#articles"','href="../index.html#articles"').replace('href="music.html"','href="../music.html"').replace('href="services.html"','href="../services.html"').replace('data-logo="ie"','src="../assets/ie-logo.svg"').replace('src="assets/ie-banner.svg"','src="../assets/ie-banner.svg"').replace('src="assets/ie-record.svg"','src="../assets/ie-record.svg"').replace('src="assets/ie-logo.svg"','src="../assets/ie-logo.svg"')
release=re.search(r'<aside class="release-panel".*?</aside>',home,re.S)[0]
cover=re.search(r'src="(data:image/jpeg;base64,[^"]+)"',release)
if cover:
 (assets/'release-cover.svg').write_text('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><image width="600" height="600" href="'+cover[1]+'"/></svg>')
 release=release.replace(cover[1],'../assets/release-cover.svg')
# Preserve uploaded raster logo exactly inside a reusable SVG asset.
from PIL import Image
im=Image.open('upload/ie logo transp(1).png');w,h=im.size
logo=base64.b64encode(Path('upload/ie logo transp(1).png').read_bytes()).decode()
(assets/'ie-logo.svg').write_text(f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}"><image width="{w}" height="{h}" href="data:image/png;base64,{logo}"/></svg>')
helper=re.search(r'const \$=.*?\n',home)[0]
toast=re.search(r'let toastTimer.*?\n',home)[0]
share=re.search(r"document.querySelectorAll\('\.share-button'\).*?\n",home)[0]
observer=re.search(r'const headerObserver=.*?headerObserver.observe\(\$\(\x27header\x27\)\);',home)[0]
music=home[home.index('// Published tracks'):home.index('let learningState=')]
(assets/'site.js').write_text(helper+toast+share+observer+'\n'+music)
bannerFn=home[home.index('const themes='):home.index('let savedView=')]
node="const fs=require('fs');\n"+helper+bannerFn+"\nconst data=JSON.parse(fs.readFileSync('output/editorial/all-articles.json'));fs.writeFileSync('output/editorial/banners.json',JSON.stringify(data.map(banner)));"
# helper declaration defines query function but does not call it while rendering.
subprocess.run(['node','-e',node],check=True);banners=json.loads(Path('output/editorial/banners.json').read_text())
concepts={
'ai-music-production':(['Brief','Compare','Refine'],'A draft becomes a production through deliberate choices.','Intention, audible evidence, and a focused revision create a useful creative loop.',['Brief fit','Clarity','Release readiness']),
'ai-search-marketing':(['Question','Evidence','Action'],'Useful content helps someone make a decision.','Connect a customer question to evidence and a relevant next action.',['Offer clarity','Evidence','Next-step fit']),
'business-agents':(['Input','Review','Action'],'Capability does not automatically grant authority.','The workflow prepares work; the responsible reviewer decides what may happen next.',['Input quality','Review clarity','Boundary clarity']),
'realtime-music':(['Intent','Sound','Decision'],'A musical control needs an audible relationship with the listener’s intention.','The listener acts, hears, evaluates, and shapes the next moment.',['Control clarity','Audible response','Recovery']),
'ai-artist-identities':(['Project','Persona','People'],'Fiction can invite imagination while facts keep the relationship clear.','Creative purpose, represented identity, and human responsibility are separate layers.',['Identity clarity','Music direction','Process clarity'])}
def diagram(a,n):
 labels,insight,caption,metrics=concepts.get(a['slug'],(['Explore','Apply','Reflect'],'Learn one idea, then put it to work.','Turn a useful idea into a small experiment.',['Clarity','Usefulness','Next step']))
 circles=''.join(f'<circle cx="{90+i*120}" cy="88" r="33" fill="none" stroke="currentColor" opacity=".65"/><text x="{90+i*120}" y="94" text-anchor="middle" fill="currentColor" font-family="Arial" font-size="13">{E(label)}</text>' for i,label in enumerate(labels))
 return f'<figure class="concept-figure"><svg viewBox="0 0 420 190" role="img" aria-label="{E(caption)}"><path d="M123 88H177M243 88H297" stroke="currentColor" opacity=".35"/><path class="workflow-light" d="M65 88H350" stroke="currentColor" fill="none" stroke-width="3"/>{circles}<path d="M90 128V150H330V128" fill="none" stroke="currentColor" opacity=".3"/><text x="210" y="179" text-anchor="middle" fill="currentColor" font-family="Arial" font-size="11" letter-spacing="2">NOTICE · EVALUATE · ADJUST</text></svg><figcaption>{E(caption)}</figcaption></figure>'
def adslot(n):
 return f'<!-- Reserved affiliate placement {n}: replace the entire decorative interlude; add clear paid relationship disclosure when activated. --><aside class="design-interlude" data-affiliate-slot="{n}" aria-hidden="true"><svg viewBox="0 0 1000 180" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke="currentColor" opacity=".45">'+''.join(f'<ellipse cx="500" cy="90" rx="{80+i*38}" ry="{18+i*8}" transform="rotate({i*7} 500 90)"/>' for i in range(10))+'</g><circle cx="500" cy="90" r="7" fill="currentColor"/></svg></aside>'
def graph(a):
 labels=concepts.get(a['slug'],(['','',''],'','',['Clarity','Usefulness','Next step']))[3]
 rows=''.join(f'<label class="graph-row"><span>{E(t)}</span><meter min="0" max="100" value="{v}" aria-label="{E(t)} example score"></meter><output>{v}%</output><input data-graph-input type="range" min="0" max="100" value="{v}" aria-label="Adjust {E(t)} example score"></label>' for t,v in zip(labels,[75,50,85]))
 return '<section class="experiment-graph"><span class="panel-kicker">Interactive planning exercise</span><h3>Give your judgment a shape.</h3><p>Adjust the sliders to compare your own assessment. These starting values are illustrative, not measured results or industry benchmarks. Explain your scores in the application notes.</p>'+rows+'</section>'
for index,a in enumerate(articles):
 long=a.get('longform',False);apa=a.get('apa',[]);questions=[]
 def inline(t):
  escaped=E(t)
  def cite(m):
   n=int(m[1]);label=apa[n-1]['citation'] if n<=len(apa) else 'Source '+str(n)
   return f'<a class="citation" href="#source-{n}">({E(label)})</a>'
  return re.sub(r'\[(\d+)\]',cite,escaped)
 def question(q,kind):
  qi=len(questions);questions.append(q)
  if kind=='select':controls=f'<label class="small" for="q-{qi}">Choose the best next action</label><select id="q-{qi}" required><option value="">Choose an action</option>'+''.join(f'<option value="{i}">{E(o)}</option>' for i,o in enumerate(q['options']))+'</select><button class="check-select" type="button">Check this action</button>'
  else:controls='<div class="choices">'+''.join(f'<button type="button" data-choice="{i}" aria-pressed="false">{E(o)}</button>' for i,o in enumerate(q['options']))+'</div>'
  return f'<fieldset class="question {kind}" data-question="{qi}"><legend>{E(q["prompt"])}</legend>{controls}<p class="feedback" role="status"></p></fieldset>'
 def checkpoint(c,n):return f'<section class="platinum-panel checkpoint"><span class="panel-kicker">Learning checkpoint {n} · '+{'choice':'Choose and explain','binary':'True or false','select':'Scenario decisions'}[c['kind']]+f'</span><h2>{E(c["title"])}</h2><p class="checkpoint-intro">Try each question. The feedback explains the idea so you can apply it.</p>'+''.join(question(q,c['kind']) for q in c['questions'])+'<p class="checkpoint-status" role="status">0 / 3 correct</p></section>'
 sections=[];current=None
 for part in a['body'].split('\n\n'):
  if part.startswith('## '):
   title=part[3:].replace('—',' and ').replace('–',' and ');title=re.sub(r'\s+',' ',title).replace('and and','and')
   current=[title,[]];sections.append(current)
  else:
   if current is None:current=['Start with the idea',[]];sections.append(current)
   current[1].append(part)
 content=[];toc=[];checkpointAt={max(0,round(len(sections)*fraction)-1):i for i,fraction in enumerate([.25,.5,.75])} if long else {}
 for n,(title,paras) in enumerate(sections):
  sid='section-'+str(n);toc.append(f'<a href="#{sid}">{E(title)}</a>');ps=['<p>'+inline(p)+'</p>' for p in paras]
  if long and n%3==1:
   inner=f'<div class="chapter-split'+(' reverse' if n%2 else '')+'"><div class="prose">'+''.join(ps[:2])+'</div>'+diagram(a,n)+'</div><div class="prose">'+''.join(ps[2:])+'</div>'
  else:inner='<div class="prose">'+''.join(ps)+'</div>'
  content.append(f'<section class="chapter"><h2 id="{sid}">{E(title)}</h2>{inner}</section>')
  if long and n==1:
   insight=concepts[a['slug']][1];content.append(f'<blockquote class="pull-insight">{E(insight)}<small>InAct editorial insight</small></blockquote>')
  if long and n in checkpointAt:
   c=checkpointAt[n];content.append(checkpoint(a['checkpoints'][c],c+1))
  if long and n in [2,7]:content.append(adslot(n))
  if long and n==5:content.append(graph(a))
  if long and n==3:content.append(watch_section(a.get('watch',[])[:1]))
  if long and n==8:content.append(watch_section(a.get('watch',[])[1:]))
 # Quick reads still get a direct page, with their original short exercise and knowledge question.
 if not long:
  q={k:a[k] for k in ['question','options','answer','why']};q['prompt']=q.pop('question');a['assessment']=[q]
 assessment='<section class="platinum-panel assessment"><span class="panel-kicker">Final assessment</span><h2>Bring it together.</h2><p>Apply the ideas, then review your assessment. You can retry any answer.</p>'+''.join(question(q,'choice') for q in a['assessment'])+'<button class="platinum" id="review-assessment">Review assessment →</button><p class="assessment-result" id="assessment-result" role="status"></p></section>'
 if apa:
  sortedrefs=sorted(enumerate(apa,1),key=lambda r:(r[1]['author'],r[1]['date']))
  refs=''.join(f'<p class="reference-entry" id="source-{i}">{E(r["author"])}. ({E(r["date"])}). <em>{E(r["title"])}.</em> <a href="{E(r["url"])}" target="_blank" rel="noopener noreferrer">{E(r["url"])}</a></p>' for i,r in sortedrefs)
 else:
  refs=''.join(f'<p class="reference-entry" id="source-{i+1}"><a href="{E(url)}" target="_blank" rel="noopener noreferrer">{E(label)} ↗</a></p>' for i,(label,url) in enumerate([a['source']]+([a['extra']] if a.get('extra') else [])))
 canonical='https://inactentertainment.github.io/ie/'+a['url'];schema={'@context':'https://schema.org','@type':'Article','headline':a['title'],'description':a['deck'],'datePublished':a.get('published','2026-10-08'),'dateModified':'2026-10-09','author':{'@type':'Organization','name':'InAct Entertainment Editorial'},'mainEntityOfPage':canonical,'wordCount':a['wordCount']}
 data=dict(index=a.get('legacyIndex',index),title=a['title'],slug=a['slug'],questions=questions)
 primer=a.get('primer',{});terms=''.join('<div><dt>'+E(t.split(':',1)[0])+'</dt><dd>'+E(t.split(':',1)[1].strip())+'</dd></div>' for t in primer.get('terms','').split('\n') if ':' in t)
 primer_html='<section class="platinum-panel primer"><span class="panel-kicker">Start here · Plain-language foundations</span><h2>'+E(primer.get('title',''))+'</h2><p>'+E(primer.get('text',''))+'</p><details><summary>Words you’ll use in this lesson</summary><dl>'+terms+'</dl></details></section>' if primer else ''
 page=f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{E(a['title'])} | InAct Courses</title><meta name="description" content="{E(a['deck'])}"><link rel="canonical" href="{canonical}"><link rel="stylesheet" href="../assets/site.css"><link rel="stylesheet" href="../assets/article.css"><script type="application/ld+json">{json.dumps(schema)}</script><link rel="stylesheet" href="../assets/courses.css"><link rel="stylesheet" href="../assets/learning-ui.css"><link rel="stylesheet" href="../assets/read-aloud.css"><link rel="stylesheet" href="../assets/business-dictionary.css"><link rel="stylesheet" href="../assets/brand-refresh.css"></head><body class="article-page" id="top"><a class="skip" href="#article">Skip to article</a>{header}{release}<progress class="reading-bar" id="article-progress" max="100" value="0" aria-label="Reading progress"></progress><main class="article-shell" id="article"><div class="article-hero">{banners[index]}<h1>{E(a['title'])}</h1><p class="deck">{E(a['deck'])}</p><p class="article-meta-line">InAct Entertainment Editorial · Updated October 9, 2026<br>{a['wordCount']:,} words · {int((a['wordCount']+219)/220)} min read · {'Deeper course lesson' if long else 'Practical quick read'}</p><div class="reader-actions"><button class="platinum" id="save-article" aria-pressed="false">Save in this browser</button><button class="outline" id="lights-toggle" aria-pressed="false">Lights on ☀</button><a class="outline" href="../index.html#courses">Back to courses</a></div></div>{primer_html}{learning_markup(a['slug'])}<details class="toc"><summary>Your learning route</summary><nav aria-label="Article sections">{''.join(toc)}</nav></details><article>{''.join(content)}</article><section class="platinum-panel exercise"><span class="panel-kicker">Apply it to your work</span><h2>Your next experiment.</h2><p>{E(a['activity'])}</p></section>{assessment}<section class="references-list"><h2>{'References' if apa else 'Sources and further reading'}</h2>{refs}<p class="small">Sources checked October 9, 2026. Linked author-date citations identify reported developments. Frameworks, exercises, and labeled hypothetical examples are original InAct editorial guidance. Undated pages use n.d.; platform availability and policies can change.</p></section><section class="platinum-panel notes"><span class="panel-kicker">Make the lesson yours</span><h2>Your application notes.</h2><label for="article-notes">Keep an idea, a decision, or a question for your next experiment.</label><textarea id="article-notes" placeholder="What will you apply, and how will you know it helped?"></textarea><p class="small">Notes and article bookmarks stay in this browser on this device. No account is needed. They are not sent to InAct. Clearing browser data can erase them.</p><p class="small" id="note-status" role="status"></p><div class="note-tools"><button class="outline" id="download-notes">Download my notes ↓</button></div></section><div class="course-navigation"><div class="reader-actions"><a class="platinum" href="../index.html#courses">Explore the course library →</a><a class="outline" href="../index.html#contact">Discuss your next idea →</a></div></div></main>{footer_markup(home)}<div id="toast" class="toast" hidden role="status"></div><script type="application/json" id="article-data">{json.dumps(data).replace('<','\\u003c')}</script><script src="../assets/site.js"></script><script src="../assets/article.js"></script><script src="../assets/video.js"></script><script src="../assets/learning-ui.js"></script><script src="../assets/read-aloud.js"></script><script src="../assets/footer.js"></script><script src="../assets/learning-term-links.js"></script></body></html>'''
 (out/(a['slug']+'.html')).write_text(page)
 print(a['slug'],a['wordCount'],len(questions))
Path('output/index.html').write_text(home)
