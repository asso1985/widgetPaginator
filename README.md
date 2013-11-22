<h1>Widget Paginator JS</h1>

<h2>Why ?</h2>
<p>This jQuery plugin can be useful if you need to slide content, especcialy in slidebar contents.</p>
<p>Take a look at <a href="http://www.barillacfn.com/forum/forum-2013/">http://www.barillacfn.com/forum/forum-2013/</a>. We had to show sliding content in the sidebar, so instead of writitng a custom script I wrote this little jQuery plugin. <br/>Hope someone can find it helpful</p>

<h2>How ?</h2>
<p>So easy: </p>

<label>Html</label>

<pre>
&lt;ol id="video-widget-controls" class="widget-paginator-controls"&gt;
	&lt;li&gt;&lt;a href="#" id="prev"&gt;prev&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;&lt;a href="#" id="next"&gt;next&lt;/a&gt;&lt;/li&gt;
&lt;/ol&gt;

&lt;div class="video-widget"&gt;
					&lt;ul&gt;
						&lt;li&gt;
							&lt;div class="video-widget-container"&gt;
								&lt;a href="http://www.barillacfn.com/video/vd-world-environment-day/?tag=" class="link-video-small"&gt;&lt;/a&gt;
								&lt;img src="http://www.barillacfn.com/wp-content/uploads/2013/07/bcfn_waste_wed2013-213x115.jpg" alt="" class="attachment-video"&gt;
							&lt;/div&gt;
							&lt;div class="video-widget-infos"&gt;
								&lt;span class="date"&gt;&lt;/span&gt;
								&lt;h4&gt;&lt;a href="http://www.barillacfn.com/video/vd-world-environment-day/?tag="&gt;World Environment Day&lt;/a&gt;&lt;/h4&gt;
							&lt;/div&gt;
						&lt;/li&gt;
						&lt;li&gt;
							&lt;div class="video-widget-container"&gt;
								&lt;a href="http://www.barillacfn.com/video/bcfn-yes-marta-antonelli-martina-sartori/?tag=" class="link-video-small"&gt;&lt;/a&gt;
								&lt;img src="http://www.barillacfn.com/wp-content/uploads/2013/03/BCFN_Antonelli_Sartori-213x115.jpg" alt="" class="attachment-video"&gt;
							&lt;/div&gt;
							&lt;div class="video-widget-infos"&gt;
								&lt;span class="date"&gt;
																&lt;/span&gt;
								&lt;h4&gt;&lt;a href="http://www.barillacfn.com/video/bcfn-yes-marta-antonelli-martina-sartori/?tag="&gt;BCFN YES! | Marta Antonelli &amp; Martina Sartori&lt;/a&gt;&lt;/h4&gt;
							&lt;/div&gt;
						&lt;/li&gt;
					&lt;/ul&gt;
					&lt;ul&gt;
						&lt;li&gt;
							&lt;div class="video-widget-container"&gt;
								&lt;a href="http://www.barillacfn.com/video/ridurre-lo-spreco-alimentare-jan-lundqvist/?tag=" class="link-video-small"&gt;&lt;/a&gt;
								&lt;img src="http://www.barillacfn.com/wp-content/uploads/2013/01/lund-213x115.png" alt="" class="attachment-video"&gt;
							&lt;/div&gt;
							&lt;div class="video-widget-infos"&gt;
								&lt;span class="date"&gt;
																&lt;/span&gt;
								&lt;h4&gt;&lt;a href="http://www.barillacfn.com/video/ridurre-lo-spreco-alimentare-jan-lundqvist/?tag="&gt;SPRECO ALIMENTARE: UNO SCENARIO GLOBALE | Jan Lundqvist&lt;/a&gt;&lt;/h4&gt;
							&lt;/div&gt;
						&lt;/li&gt;
																					&lt;li&gt;
							&lt;div class="video-widget-container"&gt;
								&lt;a href="http://www.barillacfn.com/video/verso-la-green-economy-hans-herren/?tag=" class="link-video-small"&gt;&lt;/a&gt;
								&lt;img src="http://www.barillacfn.com/wp-content/uploads/2013/01/herren1-213x115.png" alt="" class="attachment-video"&gt;
							&lt;/div&gt;
							&lt;div class="video-widget-infos"&gt;
								&lt;span class="date"&gt;
																&lt;/span&gt;
								&lt;h4&gt;&lt;a href="http://www.barillacfn.com/video/verso-la-green-economy-hans-herren/?tag="&gt;CAMBIARE IL SISTEMA ALIMENTARE | HANS HERREN&lt;/a&gt;&lt;/h4&gt;
							&lt;/div&gt;
						&lt;/li&gt;
					&lt;/ul&gt;
					&lt;ul style="display: none;"&gt;
						&lt;li&gt;
							&lt;div class="video-widget-container"&gt;
								&lt;a href="http://www.barillacfn.com/video/verso-la-green-economy-jason-clay/?tag=" class="link-video-small"&gt;&lt;/a&gt;
								&lt;img src="http://www.barillacfn.com/wp-content/uploads/2013/01/clay-213x115.png" alt="" class="attachment-video"&gt;
							&lt;/div&gt;
							&lt;div class="video-widget-infos"&gt;
								&lt;span class="date"&gt;
																&lt;/span&gt;
								&lt;h4&gt;&lt;a href="http://www.barillacfn.com/video/verso-la-green-economy-jason-clay/?tag="&gt;NECESSITÀ ALIMENTARI ED EQUILIBRI AMBIENTALI | JASON CLAY&lt;/a&gt;&lt;/h4&gt;
							&lt;/div&gt;
						&lt;/li&gt;
																					&lt;li&gt;
							&lt;div class="video-widget-container"&gt;
								&lt;a href="http://www.barillacfn.com/video/il-diritto-al-cibo-per-tutti-tavola-rotonda/?tag=" class="link-video-small"&gt;&lt;/a&gt;
								&lt;img src="http://www.barillacfn.com/wp-content/uploads/2013/01/ello-213x115.png" alt="" class="attachment-video"&gt;
							&lt;/div&gt;
							&lt;div class="video-widget-infos"&gt;
								&lt;span class="date"&gt;
																&lt;/span&gt;
								&lt;h4&gt;&lt;a href="http://www.barillacfn.com/video/il-diritto-al-cibo-per-tutti-tavola-rotonda/?tag="&gt;IL DIRITTO AL CIBO PER TUTTI | Tavola Rotonda&lt;/a&gt;&lt;/h4&gt;
							&lt;/div&gt;
						&lt;/li&gt;
					&lt;/ul&gt;
&lt;/div&gt;	

&lt;script type="text/javascript" src="http://codeorigin.jquery.com/jquery-2.0.3.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="widgetPaginator.js"&gt;&lt;/script&gt;
</pre>

<label>JavaScript</label>
<pre>

</pre>