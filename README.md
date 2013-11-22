<h1>Widget Paginator JS</h1>

<h2>Why ?</h2>
<p>This jQuery plugin can be useful if you need to slide content, especcialy in slidebar contents.</p>
<p>Take a look at <a href="http://www.barillacfn.com/forum/forum-2013/">http://www.barillacfn.com/forum/forum-2013/</a>. We had to show sliding content in the sidebar, so instead of writitng a custom script I wrote this little jQuery plugin. <br/>Hope someone can find it helpful</p>

<h2>How ?</h2>
<p>So easy: </p>

<label>Html</label>

<pre>
<ol id="video-widget-controls" class="widget-paginator-controls">
	<li><a href="#" id="prev">prev</a></li>
	<li><a href="#" id="next">next</a></li>
</ol>

<div class="video-widget">
					<ul>
						<li>
							<div class="video-widget-container">
								<a href="http://www.barillacfn.com/video/vd-world-environment-day/?tag=" class="link-video-small"></a>
								<img src="http://www.barillacfn.com/wp-content/uploads/2013/07/bcfn_waste_wed2013-213x115.jpg" alt="" class="attachment-video">
							</div>
							<div class="video-widget-infos">
								<span class="date"></span>
								<h4><a href="http://www.barillacfn.com/video/vd-world-environment-day/?tag=">World Environment Day</a></h4>
							</div>
						</li>
						<li>
							<div class="video-widget-container">
								<a href="http://www.barillacfn.com/video/bcfn-yes-marta-antonelli-martina-sartori/?tag=" class="link-video-small"></a>
								<img src="http://www.barillacfn.com/wp-content/uploads/2013/03/BCFN_Antonelli_Sartori-213x115.jpg" alt="" class="attachment-video">
							</div>
							<div class="video-widget-infos">
								<span class="date">
																</span>
								<h4><a href="http://www.barillacfn.com/video/bcfn-yes-marta-antonelli-martina-sartori/?tag=">BCFN YES! | Marta Antonelli &amp; Martina Sartori</a></h4>
							</div>
						</li>
					</ul>
					<ul>
						<li>
							<div class="video-widget-container">
								<a href="http://www.barillacfn.com/video/ridurre-lo-spreco-alimentare-jan-lundqvist/?tag=" class="link-video-small"></a>
								<img src="http://www.barillacfn.com/wp-content/uploads/2013/01/lund-213x115.png" alt="" class="attachment-video">
							</div>
							<div class="video-widget-infos">
								<span class="date">
																</span>
								<h4><a href="http://www.barillacfn.com/video/ridurre-lo-spreco-alimentare-jan-lundqvist/?tag=">SPRECO ALIMENTARE: UNO SCENARIO GLOBALE | Jan Lundqvist</a></h4>
							</div>
						</li>
																					<li>
							<div class="video-widget-container">
								<a href="http://www.barillacfn.com/video/verso-la-green-economy-hans-herren/?tag=" class="link-video-small"></a>
								<img src="http://www.barillacfn.com/wp-content/uploads/2013/01/herren1-213x115.png" alt="" class="attachment-video">
							</div>
							<div class="video-widget-infos">
								<span class="date">
																</span>
								<h4><a href="http://www.barillacfn.com/video/verso-la-green-economy-hans-herren/?tag=">CAMBIARE IL SISTEMA ALIMENTARE | HANS HERREN</a></h4>
							</div>
						</li>
					</ul>
					<ul style="display: none;">
						<li>
							<div class="video-widget-container">
								<a href="http://www.barillacfn.com/video/verso-la-green-economy-jason-clay/?tag=" class="link-video-small"></a>
								<img src="http://www.barillacfn.com/wp-content/uploads/2013/01/clay-213x115.png" alt="" class="attachment-video">
							</div>
							<div class="video-widget-infos">
								<span class="date">
																</span>
								<h4><a href="http://www.barillacfn.com/video/verso-la-green-economy-jason-clay/?tag=">NECESSITÀ ALIMENTARI ED EQUILIBRI AMBIENTALI | JASON CLAY</a></h4>
							</div>
						</li>
																					<li>
							<div class="video-widget-container">
								<a href="http://www.barillacfn.com/video/il-diritto-al-cibo-per-tutti-tavola-rotonda/?tag=" class="link-video-small"></a>
								<img src="http://www.barillacfn.com/wp-content/uploads/2013/01/ello-213x115.png" alt="" class="attachment-video">
							</div>
							<div class="video-widget-infos">
								<span class="date">
																</span>
								<h4><a href="http://www.barillacfn.com/video/il-diritto-al-cibo-per-tutti-tavola-rotonda/?tag=">IL DIRITTO AL CIBO PER TUTTI | Tavola Rotonda</a></h4>
							</div>
						</li>
					</ul>
</div>	
</pre>