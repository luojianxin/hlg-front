KISSY.add("utils/showPages/index",function(a){function e(a){var b=this;if(!(b instanceof e))return new e(a);this.pageNum=4,this.name=a,this.page=1,this.pageCount=200,this.argName="page"}var b=a.DOM,c=a.Event,d=document;return a.mix(e.prototype,{jump:function(){return undefined},checkPages:function(){isNaN(parseInt(this.page))&&(this.page=1),isNaN(parseInt(this.pageCount))&&(this.pageCount=1),this.page<1&&(this.page=1),this.pageCount<1&&(this.pageCount=1),this.page>this.pageCount&&(this.page=this.pageCount),this.page=parseInt(this.page),this.pageCount=parseInt(this.pageCount)},_createHtml:function(a){var b=this,c="",d=this.page-1,e=this.page+1;if(a==""||typeof a=="undefined")a=1;switch(a){case 1:c+='<span class="number">',this.page!=1&&(c+='<span title="Page 1"><a href="javascript:'+b.name+'.toPage(1);">1</a></span>'),this.page>=5&&(c+="<span>...</span>");if(this.pageCount>this.page+2)var f=this.page+2;else var f=this.pageCount;for(var g=this.page-2;g<=f;g++)g>0&&(g==this.page?c+='<span title="Page '+g+'">'+g+"</span>":g!=1&&g!=this.pageCount&&(c+='<span title="Page '+g+'"><a href="javascript:'+b.name+".toPage("+g+');">'+g+"</a></span>"));this.page+3<this.pageCount&&(c+="<span>...</span>"),this.page!=this.pageCount&&(c+='<span title="Page '+this.pageCount+'"><a href="javascript:'+b.name+".toPage("+this.pageCount+');">'+this.pageCount+"</a></span>"),c+="</span><br />";break;case 2:if(this.pageCount>1){c+='<div class="page-bottom"> <div class="sabrosus">',d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<a class="" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',this.page==1;if(this.page-2<=0){var h=1;if(this.pageCount>this.page+4)var f=this.page+4;else var f=this.pageCount}else if(this.page+2>=this.pageCount){var h=this.pageCount-4;if(this.pageCount>this.page+4)var f=this.page+4;else var f=this.pageCount}else{var h=this.page-2;if(this.pageCount>this.page+2)var f=this.page+2;else var f=this.pageCount}for(var g=h;g<=f;g++)g>0&&(g==this.page?c+='<span class="current a-padding">'+g+"</span>":c+='<a class="a-padding" href="javascript:'+b.name+".toPage("+g+');">'+g+"</a>");this.page+5<this.pageCount&&(c+='<a class="a-padding" title="" href="javascript:'+b.name+".toPage("+(this.page+3)+');">...</a>'),this.page==this.pageCount,e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a class="" href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',this.pageCount>5&&(c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;\u5230\u7b2c&nbsp;",this.page>=this.pageCount?c+='<input style="" type="text" class="page-pic-no w-30 bg-img" id="pageInput'+b.name+'"  value="'+this.pageCount+'" onkeypress="return window.'+b.name+'.formatInputPage(event);" onfocus="this.select()">&nbsp;\u9875':c+='<input style="" type="text" class="page-pic-no w-30 bg-img" id="pageInput'+b.name+'"  value="'+(this.page+1)+'" onkeypress="return window.'+b.name+'.formatInputPage(event);" onfocus="this.select()">&nbsp;\u9875',c+='<input type="button" value="" class="page-pic-no gray-btm-h-go w-30 btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);">',c+="</font>"),c+='<div style="clear:both"></div></div></div> '}break;case 3:c+='<div class="page-top"><div class="sabrosus"><span class="count">'+this.page+" / "+this.pageCount+"</span>",d<1?c+=' <span class="pre-none page-pic-no"></span>':c+='<a class="border-left-dedede" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',c+='<div style="clear:both"></div></div></div>'}return c},formatInputPage:function(a){var b=navigator.appName=="Microsoft Internet Explorer"?!0:!1;if(!b)var c=a.which;else var c=event.keyCode;return c==8||c==46||c>=48&&c<=57?!0:!1},toPage:function(a,b){var c=1,d=this;typeof a=="object"?c=a.options[a.selectedIndex].value:c=a,d.jump(c,b,"")},printHtml:function(a,c){return this.checkPages(),b.html(a,this._createHtml(c)),this},setPageCount:function(a){return this.pageCount=a,this},getPageCount:function(){return this.pageCount},setRender:function(a){return this.jump=a,this},setPageNum:function(a){return this.pageNum=a,this},setPage:function(a){return this.page=a,this}}),e}),KISSY.add("page/list-init",function(a,b){var a=KISSY,c=a.DOM,d=a.Event;return iconControl={msg:null,isLoad:!1,paginator:null,init:function(){d.delegate(document,"click",".J_BackTo",function(){c.show("#promoList"),c.show("#J_PromoDetail"),c.hide("#itemList"),c.hide("#J_BackToPromoList")});var a=function(a){if(!showPermissions("editor_icon","\u4fc3\u9500\u56fe\u6807"))return;var b=c.attr(this,"data");new H.widget.msgBox({title:"\u5220\u9664\u6d3b\u52a8",content:"\u7cfb\u7edf\u5c06\u4e3a\u60a8\u53d6\u6d88\u6b64\u6d3b\u52a8\u8bbe\u7f6e\u7684\u4fc3\u9500\u4fe1\u606f",type:"confirm",buttons:[{value:"\u786e\u5b9a\u5220\u9664"},{value:"\u53d6\u6d88"}],success:function(a){if(a=="\u786e\u5b9a\u5220\u9664"){ev.preventDefault();var c=function(a){window.location.href=curentUrl},d=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})},e="pid="+b+"&form_key="+FORM_KEY;(new H.widget.asyncRequest).setURI(deleteUrl).setMethod("POST").setHandle(c).setErrorHandle(d).setData(e).send()}}})},b=c.query(".J_Delete");d.on(b,"click",a)},searchPromoItems:function(){iconControl.isLoad||(iconControl.isLoad=!0);var a=function(a){c.hide("#promoList"),c.hide("#J_PromoDetail"),c.show("#itemList"),c.show("#J_BackToPromoList"),totalRecords=a.payload.totalRecords,totalRecords>0?(c.get("#J_LEmpty").style.display="none",c.removeClass(c.query(".J_PromotionItemBtnHolder"),"ks-hidden")):(c.get("#J_LEmpty").style.display="",c.addClass(c.query(".J_PromotionItemBtnHolder"),"ks-hidden")),c.html("#J_PromoItems",a.payload.body),pageNum="12",pageCount=Math.ceil(totalRecords/a.payload.pageNum),iconControl.paginator=(new b("iconControl.paginator")).setRender(iconControl.handlePagination).setPageCount(pageCount).printHtml("#J_PromotionItemPaging",2),c.hide("#J_LeftLoading"),c.show("#J_MainLeftContent")},d=function(a){c.show("#promoList"),c.show("#J_PromoDetail"),c.hide("#itemList"),c.hide("#J_BackToPromoList"),c.hide("#J_LeftLoading"),c.show("#J_MainLeftContent"),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})};if(c.val(c.get("#J_SearchTitle"))!="\u5173\u952e\u5b57\u3001\u5546\u54c1\u94fe\u63a5\u3001\u5546\u54c1\u7f16\u7801")var e=encodeURIComponent(c.val(c.get("#J_SearchTitle")));else var e="";var f=c.val(c.get("#J_SearchStatus")),g="keytitle="+e+"&status="+f;c.show("#J_LeftLoading"),c.hide("#J_MainLeftContent"),(new H.widget.asyncRequest).setURI(getPromoItemsUrl).setMethod("GET").setHandle(a).setErrorHandle(d).setData(g).setDataType("json").send()},handlePagination:function(a){pageId=a;var b=function(a){totalRecords=a.payload.totalRecords,totalRecords>0?(c.get("#J_LEmpty").style.display="none",c.removeClass(c.get(".J_PromotionItemBtnHolder"),"ks-hidden")):(c.get("#J_LEmpty").style.display="",c.addClass(c.get(".J_PromotionItemBtnHolder"),"ks-hidden")),pageNum="12",pageCount=Math.ceil(totalRecords/a.payload.pageNum),c.html("#J_PromoItems",a.payload.body),iconControl.paginator.setPage(pageId).setPageCount(pageCount).printHtml("#J_PromotionItemPaging",2),c.hide("#J_LeftLoading"),c.show("#J_MainLeftContent")};if(c.val(c.get("#J_SearchTitle"))!="\u5173\u952e\u5b57\u3001\u5546\u54c1\u94fe\u63a5\u3001\u5546\u54c1\u7f16\u7801")var d=encodeURIComponent(c.val(c.get("#J_SearchTitle")));else var d="";var e=c.val(c.get("#J_SearchStatus")),f="keytitle="+d+"&status="+e+"&page_id="+pageId;c.show("#J_LeftLoading"),c.hide("#J_MainLeftContent"),(new H.widget.asyncRequest).setURI(getPromoItemsUrl).setMethod("GET").setHandle(b).setData(f).send()},removePromotionItemHandle:function(a,b,c){if(!showPermissions("editor_icon","\u4fc3\u9500\u56fe\u6807"))return;itemIds=[],itemIds.push(a),pid=b;var d=function(a){iconControl.paginator?iconControl.paginator.toPage(iconControl.paginator.page):iconControl.searchPromoItems()},e="pid="+pid+"&item_ids="+itemIds+"&form_key="+FORM_KEY;(new H.widget.asyncRequest).setURI(removePromotionItemUrl).setMethod("POST").setHandle(d).setData(e).send()}}},{requires:["utils/showPages/index"]}); 