"""Move the approved inquiry form intact; simplify only the homepage ending."""
from pathlib import Path
import re,os
root=Path('.')
home=root/'index.html';s=home.read_text()
marker='id="home-connect"'
if marker not in s:
 match=re.search(r'<section\b[^>]*\bid="contact"[^>]*>.*?</section>',s,re.S)
 assert match,'Existing contact form must be found before moving it'
 form=match[0]
 assert 'id="inquiry-form"' in form and 'data-guided="true"' in form
 shell=(root/'about.html').read_text()
 shell=re.sub(r'<title>.*?</title>','<title>Contact Us | InAct Entertainment</title>',shell,count=1,flags=re.S)
 shell=re.sub(r'<link\b[^>]*rel="canonical"[^>]*>','<link rel="canonical" href="https://ieplr.com/contact.html"/>',shell,count=1)
 shell=re.sub(r'<meta\b(?=[^>]*\bname="description")[^>]*>','<meta name="description" content="Contact InAct Entertainment about websites, learning experiences, AI creativity, media, digital resources, and instructional design."/>',shell,count=1)
 shell=shell.replace('class="article-page connect-page" data-reader="true" data-connect-page="about"','class="contact-page"')
 form=form.replace('<h2>Contact Us.</h2>','<h1>Contact Us.</h1>')
 shell=re.sub(r'<main\b.*?</main>',lambda _: '<main class="contact-shell" id="article-main">'+form+'</main>',shell,count=1,flags=re.S)
 shell=re.sub(r'<script\b[^>]*src="[^\"]*(?:read-aloud|reader-comfort|connect-pages)\.js[^\"]*"[^>]*>\s*</script>','',shell)
 shell=shell.replace('</body>','<script defer src="assets/contact.js?v=20261015-own-page"></script></body>')
 shell=shell.replace('</head>','<link rel="stylesheet" href="assets/contact.css?v=20261015-own-page"/></head>')
 (root/'contact.html').write_text(shell)
 simple='''<section class="home-connect" id="home-connect" aria-labelledby="home-connect-title">
<h2 id="home-connect-title">Follow your curiosity into the world of InAct Entertainment.</h2>
<ul class="home-explore" aria-label="Explore our creative work"><li>Interactive websites</li><li>Learning experiences</li><li>AI creativity</li><li>Media</li><li>Digital resources</li><li>Instructional design</li></ul>
<p>Explore our connected worlds above, or contact us to explore opportunities and bring your next idea to life.</p>
<a class="platinum" href="contact.html">Contact Us</a>
</section>'''
 # Remove the old capability cards and the inline form as a single bounded ending.
 s=re.sub(r'<section class="section destination-section">.*?</section>\s*<section\b[^>]*\bid="contact"[^>]*>.*?</section>',lambda _:simple,s,count=1,flags=re.S)
 assert marker in s and 'id="inquiry-form"' not in s
 s=re.sub(r'<script\b[^>]*src="assets/contact\.js[^\"]*"[^>]*>\s*</script>','',s)
 home.write_text(s)
# All existing links and prepared brief paths now target the dedicated form.
for p in root.rglob('*.html'):
 if any(x in {'.git','.github','node_modules','_site','dist'} for x in p.parts):continue
 text=p.read_text()
 text=re.sub(r'((?:\.\./)*)(?:index\.html)?((?:\?[^\"\s<>]*)?)#contact',lambda m:m[1]+'contact.html'+m[2],text)
 if p==home:text=text.replace('href="#contact"','href="contact.html"')
 rel=lambda f:os.path.relpath(root/'assets'/f,p.parent).replace(os.sep,'/')
 for f in ['jukebox-platinum.css','home-simplified.css']:
  if f not in text:text=text.replace('</head>',f'<link rel="stylesheet" href="{rel(f)}?v=20261015-app-build"/></head>',1)
 p.write_text(text)
for filename in ['assets/contact.js','assets/connect-pages.js','assets/work-together.js','assets/home.js']:
 p=root/filename;t=p.read_text()
 t=t.replace('index.html?inquiry=sent#contact','contact.html?inquiry=sent')
 t=t.replace("'index.html?from='+encodeURIComponent(kind)+'#contact'","'contact.html?from='+encodeURIComponent(kind)")
 t=t.replace("'index.html?from='+kind+'#contact'","'contact.html?from='+kind")
 t=t.replace("url:'#contact'","url:'contact.html?service=Commercial%20funding'")
 t=t.replace('function beginFunding(){window.ieContact?.beginFunding()}',"function beginFunding(){location.href='contact.html?service=Commercial%20funding'}")
 p.write_text(t)
assert 'id="inquiry-form"' in (root/'contact.html').read_text()
assert 'id="inquiry-form"' not in home.read_text()
print('Homepage simplified; guided contact preserved on contact.html; sitewide links updated.')
