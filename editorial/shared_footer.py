import re,json,html

def footer_markup(home):
 footer=re.search(r'<footer class="site-footer"[^>]*>.*?</footer>',home,re.S)[0]
 social=json.loads(re.search(r'const SOCIAL=(.*?);\nconst articles=',home,re.S)[1])
 icons=''.join('<a href="'+html.escape(s['url'])+'" target="_blank" rel="noopener noreferrer" aria-label="Visit InAct on '+html.escape(s['label'])+'">'+s['svg']+'<span>'+html.escape(s['label'])+'</span></a>' for s in social)
 footer=footer.replace('href="legal/','href="../legal/').replace('href="learning-design.html"','href="../learning-design.html"')
 footer=footer.replace('href="#courses"','href="../index.html#courses"').replace('href="#our-world"','href="../index.html#our-world"').replace('href="#contact"','href="../index.html#contact"').replace('href="#resources"','href="../index.html#resources"').replace('href="#articles"','href="../index.html#articles"').replace('href="services.html"','href="../services.html"')
 return footer.replace('href="#top"','href="../index.html"').replace('data-logo="ie"','src="../assets/ie-logo.svg"').replace('<div class="social-links" id="social-links"></div>','<div class="social-links" id="social-links">'+icons+'</div>')
