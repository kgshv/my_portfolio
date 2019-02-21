
var resize_images = function(){
	$('.portfolio-big').each(function(index, snap){
		var $snap = $(snap);
		var $img = $snap.find('.portfolio-image');
		var $caption = $snap.find('.portfolio-caption');

		var caption_height = $caption.outerHeight();
		var image_height = $img.outerHeight();

		var heght = (image_height + caption_height);

		$snap.height(heght);
	});	
}


$(function() {

	$('body').imagesLoaded( function() {
		resize_images();
	});

	$(window).resize(function(){
		resize_images();
	});

	Highcharts.setOptions({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			backgroundColor: null
		},
		credits: false,
		title: {
			text: false
		},
	});

	var colors = {
		'coding_light': '#d6d8ec',
		'coding_dark': '#5269aa',
		'viz_light': '#fee9d2',
		'viz_dark': '#f89941',
		'jour_light': '#bfdeea',
		'jour_dark': '#006f9d',
		'design_light': '#63b671',
		'design_dark': '#0a8d3d'
	}

	// Smooth Scroll
	$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html,body').animate({
	      scrollTop: target.offset().top
	    }, 800);
	    return false;
	  }
	}
	});

	// Tabs initiated
	$('#my_skills a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

	function CreateSkillsGraphs(graph){
		$(graph.container).highcharts({
			chart: {
				type: 'column',
				marginLeft: 40,
				// backgroundColor: graph.bgcolor
			},
			plotOptions: {
				column: {
					color: graph.frontcolor,
					borderWidth: 0
				}
			},
			title: {
				text: graph.title
			},
			tooltip: {
				enabled: false
			},
			xAxis: {
				labels: {
					rotation: -45,
				},
				categories: graph.categories,
				lineColor: '#A0A0A0',
				tickColor: '#A0A0A0'
			},
			yAxis: {
				// tickAmount: 5,
				// tickInterval: 50,
				gridLineColor: '#A0A0A0',
				title: {
					text: null
				},
				labels: {
					align: 'left',
					x: -30,
					y: -3,
					formatter: function(){
						if (this.value >= 76 && this.value <=100) {
							return 'Proficient'
						} else if (this.value >= 51 && this.value <=75) {
							return 'Good'
						} else if (this.value >= 26 && this.value <=50) {
							return 'Intermediate'
						} else if (this.value >= 1 && this.value <=25) {
							return 'Basic'
						}
						if (this.isFirst) {
							return ''
						}
					}
				}
			}, 
			series: [{
				showInLegend: false,
				name: null,
				data: graph.numbers
			}]
		})
	}

	var skills_graphs = [
		{
			'container': '#coding_graph',
			'frontcolor': colors.coding_dark,
			'bgcolor': colors.coding_light,
			'categories': ['PHP', 'MySQL','Python','JavaScript', 'jQuery', 'HTML5', 'CSS3'],
			'numbers': [26,73,77,77,80,95,95],
			'title': 'Programming'
		},
		{
			'container': '#design_graph',
			'frontcolor': colors.design_dark,
			'bgcolor': colors.design_light,
			'categories': ['QGis', 'Illustrator', 'Photoshop','InDesign', 'Highcharts/D3'],
			'numbers': [26,95,75,55,77],
			'title': 'Visualization/<br />Design'
		},
		{
			'container': '#reporting_graph',
			'frontcolor': colors.jour_dark,
			'bgcolor': colors.jour_light,
			'categories': ['','Communication','Risk management','Leadership','Team play','Agile + Scrum'],
			'numbers': [0,95,75,85,90,70],
			'title': 'Project Management'
		},
	]

	$.each(skills_graphs, function(index, graph){
		CreateSkillsGraphs(graph);
	});

	// Charts
	$('#pie').highcharts({
		tooltip: { 
			pointFormat: ''
		},
		plotOptions: {
			pie: {
				colors: [
					'#5269aa',
					'#006f9d',
					'#0a8d3d',
					'#f89941'
				],
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false
				},
				borderWidth: 3
			}
		},
		series: [{
			type: 'pie',
			name: 'Who I am',
			shadow: {
				color: '#ccc',
				offsetX: 0,
				offsetY: 0,
				opacity: 0.5,
				width: 7
			},
			data: [
				['Coder', 45],
				['Infographer', 23],
				['Project manager', 22],
				['UI/UX Designer', 10],
			]
		}]
	});


	// Timeline

	var getMyDate = function(text_date){
		var formatTime = d3.time.format("%m-%d-%Y");
		var mydate = new Date( formatTime.parse(text_date) );
		return mydate.getTime()
	}

	var work = [
		{
			id: 'timeline',
			label: "Experience",
			times: [
				{
					"label":"'Logos' Language school",
					"role": 'Teacher of English',
					"color": colors.viz_dark,
					'graph': '',
					"starting_time": getMyDate('06-01-2005'), "ending_time": getMyDate('12-31-2005')
				},
				{
					"label":"Gazeta.24 daily newspaper",
					'role': 'Reporter',
					"color": colors.viz_dark,
					'graph': '',
					"starting_time": getMyDate('01-01-2007'), "ending_time": getMyDate('06-01-2008')
				},
				{
					"label":"Tochka.net portal",
					'role': 'Reporter',
					"color": colors.viz_dark,
					'graph': '',
					"starting_time": getMyDate('02-02-2010'), "ending_time": getMyDate('05-01-2011')
				},
				{
					"label":"Missouri Business Alert",
					'role': 'Infographics producer, intern',
					"color": colors.viz_dark,
					'graph': '',
					"starting_time": getMyDate('06-10-2013'), "ending_time": getMyDate('08-20-2013')
				},
				{
					"label":"Columbia Missourian",
					'role': 'Infographics Producer / Data Editor',
					"color": colors.viz_dark,
					'graph': '',
					"starting_time": getMyDate('07-02-2014'), "ending_time": getMyDate('08-20-2015')
				},
				{
					"label":"National University of Kyiv-Mohyla Academy",
					'role': 'Professor of Data Journalism and Information Graphics',
					"color": colors.viz_dark,
					'graph': '',
					"starting_time": getMyDate('01-01-2016'), "ending_time": getMyDate('08-30-2016')
				},
				{
					"label":"tbk Creative",
					'role': 'Front End Developer',
					"color": colors.viz_dark,
					'graph': '',
					"starting_time": getMyDate('11-07-2016'), "ending_time": getMyDate('05-30-2017')
				}
			]
		},
		{
			id: 'timeline_01',
			label: null,
			times: [
				{
					"label":"Ostro.org regional news site",
					"role": "Reporter",
					"color": colors.viz_dark,
					'graph': '_01',
					"starting_time": getMyDate('01-01-2006'), "ending_time": getMyDate('12-30-2006')
				},
				{
					"label":"Donetskie Novosti regional weekly newspaper",
					"role": "Reporter, Editor, Project Manager",
					"color": colors.viz_dark,
					'graph': '_01',
					"starting_time": getMyDate('06-02-2008'), "ending_time": getMyDate('02-01-2010')
				},
				{
					"label":"Delo national daily newspaper",
					"role": "Reporter / Editor",
					"color": colors.viz_dark,
					'graph': '_01',
					"starting_time": getMyDate('05-02-2011'), "ending_time": getMyDate('08-20-2012')
				},
				{
					"label":"DocumentCloud",
					"role": "Research Assistant",
					"color": colors.viz_dark,
					'graph': '_01',
					"starting_time": getMyDate('06-10-2013'), "ending_time": getMyDate('07-01-2014')
				},
				{
					"label":"Kyiv Post",
					'role': 'Head of Newsroom Digital Strategy',
					"color": colors.viz_dark,
					'graph': '_01',
					"starting_time": getMyDate('09-01-2015'), "ending_time": getMyDate('11-07-2016')
				},
				{
					"label":"Freelance",
					'role': 'Front end / back end / full stack dev, in particular for Wordpress',
					"color": colors.viz_dark,
					'graph': '_01',
					"starting_time": getMyDate('06-01-2017'), "ending_time": Date.now()
				}
			]
		}
	];

	var education = [
		{
			id: 'timeline_02',
			label: "Education",
			times: [
				{
					"label": 'Donetsk National University (Ukraine)',
					"role": "BA and MA in Theory of Translation",
					"color": colors.design_dark,
					'graph': '_02',
					"starting_time": getMyDate('09-01-2004'), "ending_time": getMyDate('08-20-2009')
				},
				{
					"label": 'Convergence journalism program in Kyiv (Ukraine)',
					"role": "at National University of Kyiv-Mohyla Academy",
					"color": colors.design_dark,
					'graph': '_02',
					"starting_time": getMyDate('09-01-2009'), "ending_time": getMyDate('12-20-2010')
				},
				{
					"label": 'University of Missouri (in Columbia, USA)',
					"role": "School of Journalism, MA in Journalism with forus on Data Journalism",
					"color": colors.design_dark,
					'graph': '_02',
					"starting_time": getMyDate('08-20-2012'), "ending_time": getMyDate('08-20-2014')
				}
			]
		},
		{
			id: 'timeline_03',
			label: null,
			times: [
				{
					"label": 'Course in investigative journalism in Prague (Czech Republic)',
					"color": colors.design_dark,
					'graph': '_03',
					"starting_time": getMyDate('10-01-2008'), "ending_time": getMyDate('11-01-2008')
				},
				{
					"label": 'Course on using social media in journalism (Ukraine)',
					"color": colors.design_dark,
					'graph': '_03',
					"starting_time": getMyDate('02-01-2009'), "ending_time": getMyDate('03-01-2009')
				},
			]
		}
	];

	var t_width = $('#example_row').width();

	var getW = function(mw){
		if(mw < 600){
			return 600
		} else {
			return mw-60
		}
	}

	var timeline = d3.timeline()
					 .beginning( getMyDate('09-01-2004') )
					 .ending( Date.now() )
					 .itemMargin(1)
					 .itemHeight(50)
					 .margin({left: 80, right: 30, top: 0, bottom: 0})
					 .tickFormat(
					 	{
					 		tickTime: d3.time.years,
					 		tickInterval: 1,
					 		tickSize: 20
						}
					 	)
					 .stack()
					 .mouseover	(function(d, i, datum){
					 	var id = '[id=timelineItem_timeline' + d.graph + ']';
					 	var color = $($(id)[i]).css('fill').substring(4);
					 	color = color.replace(')','');
					 	var newcolor = 'rgba(' + color + ', 0.8)';
					 	$($(id)[i]).css('fill', newcolor);

					 	$('#place').html(d.label);
					 	$('#role').html(d.role);
					 })
					 .mouseout	(function(d, i, datum){
					 	var id = '[id=timelineItem_timeline' + d.graph + ']';
					 	var color = $($(id)[i]).css('fill');
					 	color = color.replace('0.8', '1');
					 	$($(id)[i]).css('fill', color);

					 	$('#place').html('...');
					 	$('#role').html('...');
					 });

	var mw = $('#example_row').width()

	var twidth = getW(mw);

	var wrk = d3.select("#work_timeline")
	  .append("svg")
	  .attr("width", twidth)
	  .datum(work)
	  .call(timeline);

	var edu = d3.select("#education_timeline")
	  .append("svg")
	  .attr("width", twidth)
	  .datum(education)
	  .call(timeline.orient('top'));

	wrk.selectAll('.tick line')
	   .attr('y2', -110)
	   .attr('stroke','#ccc')
	   .style("stroke-dasharray", ("3, 3"));

	wrk.selectAll('.tick text')
	   .attr('y', 10);

	wrk.select('path')
	   .attr('d', 'M80,0V0H'+(twidth-30).toString()+'V0');

	edu.selectAll('.tick line')
	   .attr('y1', 0)
	   .attr('y2', 110)
	   .attr('stroke','#ccc')
	   .style("stroke-dasharray", ("3, 3"));

	edu.selectAll('#timelineItem_timeline_02')
	   .attr('y', 2)
	   .attr('cy', 2);

	edu.selectAll('#timelineItem_timeline_03')
	   .attr('y', 53)
	   .attr('cy', 53);

	edu.select('path')
	   .attr('d', 'M80,0V0H'+(twidth-30).toString()+'V0');

	edu.select('.axis')
	   .attr('transform', 'translate(0,0)');

	d3.selectAll('.timeline-label')
	  .attr('transform', function(d,i){
			if (i == 0){
				return 'translate(0,100)'
			} else if (i == 2){
				return 'translate(0,50)'
			}
	  });

	$('#timelineItem_timeline').siblings('text').css('display','none');
	$('#timelineItem_timeline_02').siblings('text').css('display','none');

	$('#education_timeline svg g .tick text').css('display', 'none');


	$('.flexslider').flexslider({
		animation: "slide",
		slideshow: false,
		animationLoop: true,
		itemWidth: 230,
		itemMargin: 0
	});

	$("#portfolio-pdf").hover(function(e){
		e.preventDefault();
		$(this).css('right','0');
	}, function(e){
		e.preventDefault();
		$(this).css('right','-185px');
	});

	$( document ).tooltip({
      track: true
    });

});