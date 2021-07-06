class Time
	{
		constructor()
			{
				this.second=null;
				this.minute=null;
				this.hour=null;
				this.weekday=null;
				this.day=null;
				this.month=null;
				this.year=null;

				this._week_days=[
					"Monday",
					"Tuesday",
					"Thursday",
					"Wednessday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sunday"
				];
				this._months=[
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September",
					"October",
					"November",
					"December"
				];
			}
		get_second()
			{
			return this.second;
			}
		get_minute()
			{
			return this.minute;
			}
		get_hour()
			{
			return this.hour;
			}
		get_weekday()
			{
			return this.weekday;
			}
		get_day()
			{
			return this.day;
			}
		get_month()
			{
			return this.month;
			}
		get_year()
			{
			return this.year;
			}
		getTime()
			{
				var t=new Date();
				this.second=t.getSeconds();
				this.minute=t.getMinutes();
				this.hour=t.getHours();
				this.weekday=t.getDay();
				this.day=t.getDate();
				this.month=t.getMonth();
				this.year=t.getFullYear();
			return this;
			}
		toString()
			{
					var DATE;
					DATE+=this.weekday+";";
					DATE+=this.day+";";
					DATE+=this.month+";";
					DATE+=this.year+";";
					DATE+=this.hour+";";
					DATE+=this.minute+";";
					DATE+=this.second+";";
			return DATE;
			}
		DatetoStringf(format)
			{
					var DATE;
					var argc=strlen(format);
					if((argc<4||argc>5))
							{
									fprintf(stderr,"Invalid Parameter Number!");
									return "Invalid Parameter Number";
							}
					var delim=argc==5?format[5]:'-';
					for(var j=0;j<3;j++)
							{
									switch(format[j])
											{
													case 'y':
															DATE+=format[4]=='s'?this.year.substr(2):this.year;
															j!=3?DATE+=delim:0;
															break;
													case 'm':
															DATE+=this.month;
															j!=3?DATE+=delim:0;
															break;
													case 'd':
															DATE+=this.day;
															j!=3?DATE+=delim:0;
															break;
											}
							}
			return DATE;
			}
		_to_min()
			{
			return (((this.month-1)*43800)+((this.day-1)*1440)+(this.hour*60)+(this.minute));
			}

		min()
				{
				return this._to_min();
				}
			};

var r=new Time();
r.getTime();
console.log(r);
console.log(r.toString());
