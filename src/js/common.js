


//这是一个 兼容IE6 的创建ajax 对象的工具
	function createXML()
			{
				var req=null;
				if (window.XMLHttpRequest)
				{
					 //如果存在这个对象，就用这个方法
					req=new XMLHttpRequest();
				}
				else
				{
					//IE6中创建ajax对象的方法
					req=new ActiveXObject("Microsft.XMLHTTP");
				}
				return req;
			}
			
			
			//创建事件监听兼容IE

function binding(oElem, eventName, fn)
{
	// 如果绑定对象中存在 attachEvent 这个方法，
	// 说明是在IE浏览器中
	if (oElem.attachEvent)
	{
		// eventName  :  click ==> onclick
		oElem.attachEvent("on" + eventName, fn);
	}
	else
	{	
		oElem.addEventListener(eventName, fn, false);
	}
}




//  阻止事件冒泡

function stop(e)
{
    //  记得没有写有 e = e || event;
	 if (e.stoppropagation)
		{
			e.stoppropagation();
		}
		else
		{
			e.cancelBubble=true;
		}

}


//阻止浏览器默认行为

function zuzhi(e)
{

    //  记得没有写有 e = e || event;
	 if (e.preventDefault)
	 {
		e.preventDefault();
	 }
	 else
	 {
		e.returnValue=false;
	 }

}


function addCookie(name, val, day)
{    
    var oDate=new Date();
	oDate.setDate(oDate.getDate()+day);
	document.cookie = ""+name+"="+val+";expires=" + oDate;
}

function getCookie(name)
{
	
	var cookie = document.cookie;

	 var arr=cookie.split("; ");
		     	 for ( var i=0 ; i<arr.length ; i++) {
		     	 	 var arr2=arr[i].split("=");
		     	 	if (arr2.length>=2) {
		   
						if (arr2[0]==name) {
		     	 	      	return arr2[1];
		     	 	     }
		   
				      } 
		     	 	
		     	 }
	return "";
	
}































