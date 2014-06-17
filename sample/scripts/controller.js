var Controller = (function() {
	var Controller = function Controller (element) {
		this.$el = element;
		this.data = {
			countries: ['countries'],
			speeds: ['speed'],
			degs: ['deg']
		};
	};

	Controller.prototype.init = function () {
		this.registerUI();
		this.registerEvents();

		this.chartInit();
	};

	Controller.prototype.registerUI = function () {
		this.$form = this.$el.find('form');
		this.$country = this.$form.find('input[type=text]');
	};

	Controller.prototype.registerEvents = function () {
		var self = this;
		self.$form.bind({
			submit: $.proxy(this.addDataChart, self)
		});
	};

	Controller.prototype.addDataChart = function (e) {
		e.preventDefault();

		var self = this;

		self.callWebService(self.$country.val());

		setTimeout(function () {
			self.chart.load({
				columns: [
					self.data.countries,
					self.data.speeds,
					self.data.degs
				]
			});
		});

		return false;
	}
 
	Controller.prototype.chartInit = function () {
		var self = this;

		self.callWebService('france');

		self.chart = c3.generate({
			bindto: '#chart',
			data: {
				x: 'countries',
				columns: [
					self.data.countries,
					self.data.speeds,
					self.data.degs
				]
			},
			axis: {
				x: {
					type: 'categorized' // this needed to load string x value
				}
			},
			transition: {
				duration: 200
			}
		});
	}

	Controller.prototype.callWebService = function (country) {
		var self = this;
		if(country != '') {

			$.ajax({
				url: 'http://api.openweathermap.org/data/2.5/find?q=' + country + '&units=metric&mode=json',
				async: false
			})
			.success(function(data) {
				self.data.countries.push(country);
				self.data.speeds.push(data.list[0].wind.speed);
				self.data.degs.push(data.list[0].wind.deg);
			});
		}
	}

	return Controller;
})();