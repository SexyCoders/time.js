export class Time
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
		fromString(str)
			{
				var T=str.split(';');	
				this.weekday=T[0];
				this.day=T[1];
				this.month=T[2];
				this.year=T[3];
				this.hour=T[4];
				this.minute=T[5];
				this.second=T[6];
			}
		toString()
			{
					var DATE="";
					DATE+=this.weekday+";";
					DATE+=this.day+";";
					DATE+=this.month+";";
					DATE+=this.year+";";
					DATE+=this.hour+";";
					DATE+=this.minute+";";
					DATE+=this.second+";";
			return DATE;
			}
		toStringf(format,time_format,week_day_flag)
			{
				var DATE="";
				if(week_day_flag)
					DATE+=this._week_days[this.weekday]+" ";
				var argc=format.length;
				if(argc<2)
					return new Error("At least 2 parameters required!");
				var delim;
				var short_flag=0;
				for(var j=0;j<argc-1;j++)
					{
						if(format[j]=='s')
							{
								short_flag=1;
								delim=argc==5?format[4]:'-';
								break;
							}
						else
							delim=' ';
					}
				//console.log(delim);
				for(var j=0;j<(argc-2);j++)
					{
						//console.log(j);
						//console.log(argc-2);
						//console.log(DATE);
						switch(format[j])
							{
								case 'y':
									DATE+=short_flag?this.year.substring(0,2):this.year;
									j!=2?DATE+=delim:"";
									break;
								case 'm':
									if(short_flag)
											DATE+=this.month;
									else
											DATE+=this._months[this.month-1];
									j!=2?DATE+=delim:"";
									break;
								case 'd':
									DATE+=this.day;
									j!=2?DATE+=delim:"";
									break;
							}
					}
				if(time_format=='m')
					DATE+=" "+this.hour+this.minute;
				else
					DATE+=" "+this.hour+":"+this.minute;
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
		check_before_minutes(min)
			{
				var tmp=new Time();
				tmp.getTime();
				tmp_min=tmp.min();
				this_min=this.min();
				if(this_min+MIN>=tmp_min)
					return 1;
				else
					return 0;
			}
		check_before_minutes(min)
			{
				var tmp=new Time();
				tmp.getTime();
				tmp_min=tmp.min();
				this_min=this.min();
				if(this_min+MIN>=tmp_min)
					return 0;
				else
					return 1;
			}
		compare(comp)
			{
				if(typeof(comp)=='Time')
					{
						var neq=0;
						if(this.weekday!=comp.weekday)
							neq=1;
						else if(this.day!=comp.day)
							neq=1;
						else if(this.month!=comp.month)
							neq=1;
						else if(this.year!=comp.year)
							neq=1;
						else if(this.hour!=comp.hour)
							neq=1;
						else if(this.minute!=comp.minute)
							neq=1;
						else if(this.second!=comp.second)
							neq=1;
						if(neq==1)
							{
								if(this.min()>comp.min())
									return 1;
								else
									return -1;
							}
						else
							return 0;
							
					}
				else if(typeof(comp)=='object')
					throw new Error("Object is not of type Time. Refusing to compare!");
				else
					{
						if(this.min()==comp)
							return 0;
						else if(this.min()>comp)
							return 1;
						else 
							return -1;
					}
			return 1;
			}
		};

//var t=new Time();
//t.fromString("1;23;12;11;13;24;34;");
//console.log(t.toStringf("dmyl-","c",1));

