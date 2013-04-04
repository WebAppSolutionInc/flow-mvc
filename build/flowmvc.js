/*
FlowMVC 0.1.0

Copyright (c) 2013 [Web App Solution, Inc.](http://webappsolution.com)
Open source under the [GNU General Public License](http://www.gnu.org/licenses).
*/
Ext.define("FlowMVC.logger.Logger",{statics:{getInjectableLogger:function(){return{fn:function(a){return FlowMVC.logger.Logger.getLogger(a)},singleton:false}},getLogger:function(b){var c;var a;var d;if(typeof b!="string"){b=Ext.ClassManager.getName(b)}c=log4javascript.getLogger(b);c.setLevel(log4javascript.Level.ALL);a=new log4javascript.BrowserConsoleAppender();d=new log4javascript.PatternLayout("%d{HH:mm:ss:SSS} %-5p [%c] - %m");a.setLayout(d);c.addAppender(a);return c}}});Ext.define("FlowMVC.mvc.event.EventDispatcher",{extend:"Ext.util.Observable",inject:["logger"],dispatchGlobalEvent:function(b,a){if(b.type!=null){type=b.type;a=b}else{type=b}this.logger.debug("dispatchGlobalEvent: "+type);return this.fireEvent(type,a)},addGlobalEventListener:function(c,b,a){this.logger.debug("addGlobalEventListener: "+c);this.addListener(c,b,a)},removeGlobalEventListener:function(c,b,a){this.logger.debug("removeGlobalEventListener");this.removeListener(c,b,a)}});Ext.define("FlowMVC.mvc.event.AbstractEvent",{statics:{logger:FlowMVC.logger.Logger.getLogger("FlowMVC.mvc.event.AbstractEvent")},type:"",data:null,constructor:function(a){if((a==null)||(a=="")){throw new Error("the parameter 'type' cannot be null or an empty string.")}FlowMVC.mvc.event.AbstractEvent.logger.debug("AbstractEvent.Constructor: type = ",a);this.type=a}});Ext.define("FlowMVC.mvc.service.rpc.AsyncToken",{id:null,responder:null,constructor:function(){this.id=this.randomUUID()},addResponder:function(a){this.responder=a},applySuccess:function(a){var b;var c;b=this.responder.success;c=this.responder.scope;if(b){b.call(c,a)}},applyFailure:function(a){var b;var c;b=this.responder.failure;c=this.responder.scope;if(b){b.call(c,a)}},applyResponderMethod:function(a,d){FlowMVC.mvc.service.AbstractService.logger.debug("applyResponderMethod: ",d);var b=null;if(this.getResponder()&&this.getResponder().scope){var c=this.getResponder().scope;if(this.getResponder()[d]){FlowMVC.mvc.service.AbstractService.logger.debug("applyResponderMethod: using service caller's custom defined "+d+" callback");b=this.getResponder()[d]}else{if(typeof c[d]==="function"){FlowMVC.mvc.service.AbstractService.logger.debug("applyResponderMethod: using service caller's default "+d+" callback");b=c[d]}else{throw new Error("["+Ext.getDisplayName(arguments.callee)+"] "+CafeTownsend.service.AbstractService.NO_RESPONDER_DEFINED)}}FlowMVC.mvc.service.AbstractService.logger.groupEnd();b.call(c,a);this.setResponder(null)}else{throw new Error("["+Ext.getDisplayName(arguments.callee)+"] "+CafeTownsend.service.AbstractService.NO_RESPONDER_DEFINED)}},randomUUID:function(){var c=[],d="0123456789ABCDEF";for(var b=0;b<36;b++){c[b]=Math.floor(Math.random()*16)}c[14]=4;c[19]=(c[19]&3)|8;for(var a=0;a<36;a++){c[a]=d[c[a]]}c[8]=c[13]=c[18]=c[23]="-";return c.join("")}});Ext.define("FlowMVC.mvc.service.rpc.Responder",{success:null,failure:null,scope:null,constructor:function(c,a,b){this.success=c;this.failure=a;this.scope=b}});Ext.define("FlowMVC.mvc.service.rpc.ResponderError",{extend:"Error",statics:{NO_RESPONDER_DEFINED:"You must provide a responder object to the service that contains either a custom defined success method that exists on the service's caller or a default 'success()' callback.\nSet the responder on the object by doing:\nvar responder = Ext.create('FlowMVC.mvc.service.rpc.Responder', this.logoutSuccess, this.logoutFailure, this);\nservice.setResponder(responder);or\nservice.setResponder({ success: me.mySuccess, fault: me.myFailure, scope: me});"},constructor:function(a){a="["+Ext.getDisplayName(arguments.callee)+"] "+a;this.callParent(a)}});Ext.define("FlowMVC.mvc.controller.AbstractController",{extend:"Ext.app.Controller",statics:{ROOT_APPLICATION:null,logger:FlowMVC.logger.Logger.getLogger("FlowMVC.mvc.controller.AbstractController")},inject:["eventBus"],config:{sessionToken:null},init:function(){FlowMVC.mvc.controller.AbstractController.logger.debug("init");try{this.setupGlobalEventListeners()}catch(a){FlowMVC.mvc.controller.AbstractController.logger.debug("[ERROR] AbstractController.init: \n\t Can't get access to the application property in the Controller because its undefined. \n\t If a concrete controller class extends this, why is this.getApplication() undefined in AbstractController.init() ???")}},setupGlobalEventListeners:function(){FlowMVC.mvc.controller.AbstractController.logger.debug("setupGlobalEventListeners")},executeServiceCall:function(a,g,c,f,b,e){FlowMVC.mvc.controller.AbstractController.logger.group("FlowMVC.mvc.controller.AbstractController.executeServiceCall");var d;if(a.getUsePromise()){FlowMVC.mvc.controller.AbstractController.logger.info("executeServiceCall: Using Promises");d=this.executeServiceCallWithPromises(a,g,c,f,b,e)}else{FlowMVC.mvc.controller.AbstractController.logger.info("executeServiceCall: Using AsyncToken");d=this.executeServiceCallWithAsyncToken(a,g,c,f,b,e)}return d},executeServiceCallWithAsyncToken:function(a,h,d,g,c,f){FlowMVC.mvc.controller.AbstractController.logger.debug("executeServiceCallWithPromises");var b=Ext.create("FlowMVC.mvc.service.rpc.Responder",g,c,f);var e=h.apply(a,d);e.addResponder(b);return e},executeServiceCallWithPromises:function(a,f,c,e,b,d){FlowMVC.mvc.controller.AbstractController.logger.debug("executeServiceCallWithPromises");return f.apply(a,c).then({success:e,failure:b,scope:d}).always(function(){FlowMVC.mvc.controller.AbstractController.logger.debug("executeServiceCall: always do after promise")})},getService:function(b){b=(b&&b.value)?b.value:b;FlowMVC.mvc.controller.AbstractController.logger.debug("getService: using: ",b);var a=Ext.ClassManager.get(b);return new a()},getMVCApplication:function(){if(FlowMVC.mvc.controller.AbstractController.ROOT_APPLICATION==null){if(Ext.getVersion("extjs")){FlowMVC.mvc.controller.AbstractController.logger.warn("AbstractController.getMVCApplication: using 'this.application' because ExtJS 4.1 and below doesn't use a getter for the root application.");FlowMVC.mvc.controller.AbstractController.ROOT_APPLICATION=this.application}else{FlowMVC.mvc.controller.AbstractController.logger.info("AbstractController.getMVCApplication: using 'this.getApplication() because we're in Touch 2.x+'");FlowMVC.mvc.controller.AbstractController.ROOT_APPLICATION=this.getApplication()}}return FlowMVC.mvc.controller.AbstractController.ROOT_APPLICATION}});Ext.define("FlowMVC.mvc.mediator.AbstractMediator",{extend:"Deft.mvc.ViewController",statics:{logger:FlowMVC.logger.Logger.getLogger("FlowMVC.mvc.mediator.AbstractMediator")},inject:{eventBus:"eventBus"},config:{},init:function(){FlowMVC.mvc.mediator.AbstractMediator.logger.debug("init");try{this.setupGlobalEventListeners()}catch(a){FlowMVC.mvc.mediator.AbstractMediator.logger.error("init: \n\t Can't get access to the application property in the Controller because its undefined. \n\t If a concrete controller class extends this, why is this.getApplication() undefined in AbstractMediator.init() ???")}},getComponentById:function(b,a){return a.down("#"+b)},getSlideLeftTransition:function(){return{type:"slide",direction:"left"}},getSlideRightTransition:function(){return{type:"slide",direction:"right"}},addEventListenerBySelector:function(b,d,e){FlowMVC.mvc.mediator.AbstractMediator.logger.debug("addEventListenerBySelector: selector = "+b+" eventType = "+d);var c={};c[d]=e;var a={};a[b]=c;this.control(a)},getViewByXType:function(c){FlowMVC.mvc.mediator.AbstractMediator.logger.debug("getViewByXType: xtype = ",c);var b=Ext.ComponentQuery.query(c);var a;if(b){a=b[0]}return a},setupGlobalEventListeners:function(){FlowMVC.mvc.mediator.AbstractMediator.logger.debug("setupGlobalEventListeners")}});Ext.define("FlowMVC.mvc.service.AbstractService",{requires:["FlowMVC.mvc.service.rpc.Responder","FlowMVC.mvc.service.rpc.ResponderError","FlowMVC.mvc.service.rpc.AsyncToken"],statics:{logger:FlowMVC.logger.Logger.getLogger("FlowMVC.mvc.service.AbstractService"),NO_RESPONDER_DEFINED:"You must provide a responder object to the service that contains either a custom defined success method that exists on the service's caller or a default 'success()' or 'failure()' callback.Set the responder on the object by doing:\nvar responder = Ext.create('FlowMVC.mvc.service.rpc.Responder', this.myCustomSuccess, this.myCustomFailure, this);\nservice.setResponder(responder);\nor\nservice.setResponder({ success: this.myCustomSuccess, fault: this.myCustomFailure, scope: this});"},config:{usePromise:false,responder:null},applyResponderMethod:function(a,d){FlowMVC.mvc.service.AbstractService.logger.debug("applyResponderMethod: ",d);var b=null;if(this.getResponder()&&this.getResponder().scope){var c=this.getResponder().scope;if(this.getResponder()[d]){FlowMVC.mvc.service.AbstractService.logger.debug("applyResponderMethod: using service caller's custom defined "+d+" callback");b=this.getResponder()[d]}else{if(typeof c[d]==="function"){FlowMVC.mvc.service.AbstractService.logger.debug("applyResponderMethod: using service caller's default "+d+" callback");b=c[d]}else{throw new Error("["+Ext.getDisplayName(arguments.callee)+"] "+CafeTownsend.service.AbstractService.NO_RESPONDER_DEFINED)}}FlowMVC.mvc.service.AbstractService.logger.groupEnd();b.call(c,a);this.setResponder(null)}else{throw new Error("["+Ext.getDisplayName(arguments.callee)+"] "+CafeTownsend.service.AbstractService.NO_RESPONDER_DEFINED)}},success:function(a,b){FlowMVC.mvc.service.AbstractService.logger.info("success");FlowMVC.mvc.service.AbstractService.logger.info(a);if((a.success!=null)&&(a.success!==true)){this.failure(a,b);return}FlowMVC.mvc.service.AbstractService.logger.groupEnd();if(b&&(b instanceof FlowMVC.mvc.service.rpc.AsyncToken)){b.applySuccess(a)}else{if(b&&(b instanceof Deft.promise.Deferred)){b.resolve(a)}else{this.applyResponderMethod(a,"success")}}},failure:function(a,b){FlowMVC.mvc.service.AbstractService.logger.info("failure");FlowMVC.mvc.service.AbstractService.logger.groupEnd();if(b&&(b instanceof FlowMVC.mvc.service.rpc.AsyncToken)){b.applyFailure(a)}else{if(b&&(b instanceof Deft.promise.Deferred)){deferred.reject("There was a service error.")}else{this.applyResponderMethod(a,"failure")}}}});Ext.define("FlowMVC.mvc.service.mock.AbstractServiceMock",{extend:"FlowMVC.mvc.service.AbstractService",statics:{logger:FlowMVC.logger.Logger.getLogger("FlowMVC.mvc.service.mock.AbstractServiceMock"),DELAY_IN_MILLISECONDS:3000},delayedSuccess:function(b,c){FlowMVC.mvc.service.mock.AbstractServiceMock.logger.debug("delayedSuccess");var d;var e;d=this.getTokenOrPromise();e=this;var a=Ext.create("Ext.util.DelayedTask",function(){e.success(b,d)});c=this.getDelayInMilliSeconds(c);a.delay(c);return(d.promise)?d.promise:d},delayedFailure:function(b,c){FlowMVC.mvc.service.mock.AbstractServiceMock.logger.debug("delayedFailure");var d;var e;d=this.getTokenOrPromise();e=this;var a=Ext.create("Ext.util.DelayedTask",function(){e.failure(b,d)});c=this.getDelayInMilliSeconds(c);a.delay(c);return(d.promise)?d.promise:d},getTokenOrPromise:function(){var a;if(this.getUsePromise()){a=Ext.create("Deft.promise.Deferred")}else{a=Ext.create("FlowMVC.mvc.service.rpc.AsyncToken")}return a},getDelayInMilliSeconds:function(a){a=(a==null)?FlowMVC.mvc.service.mock.AbstractServiceMock.DELAY_IN_MILLISECONDS:a;FlowMVC.mvc.service.mock.AbstractServiceMock.logger.debug("getDelayInMilliSeconds: "+a);return a},getRandomInt:function(b,a){return Math.floor(Math.random()*(a-b+1))+b}});Ext.define("FlowMVC.mvc.store.AbstractStore",{extend:"Ext.data.Store",statics:{logger:FlowMVC.logger.Logger.getLogger("FlowMVC.mvc.store.AbstractStore")},_selectedRecord:null,setSelectedRecord:function(a){FlowMVC.mvc.store.AbstractStore.logger.debug("setSelectedRecord");this._selectedRecord=a;this.fireEvent("selectedRecordChange",this,a)},getSelectedRecord:function(){FlowMVC.mvc.store.AbstractStore.logger.debug("getSelectedRecord");return this._selectedRecord},setData:function(a){if(Ext.getVersion("extjs")){FlowMVC.mvc.store.AbstractStore.logger.info("setData: using 'store.removeAll() and store.add(data)' because ExtJS 4.1 doesn't support store.setData().");this.removeAll();if(a){this.add(a)}else{this.removeAll()}}else{FlowMVC.mvc.store.AbstractStore.logger.info("setData");this.callParent(arguments)}},update:function(c,e){e=e?e:"id";if(Ext.getVersion("extjs")){var b=this.find(e,c.get(e));if(b<0){return}this.insert(b,c);this.removeAt(b+1);FlowMVC.mvc.store.AbstractStore.logger.debug("update: updating ExtJS model with "+e)}else{var d=c.data[e];var a=this.findRecord(e,d);if(a){a=c;a.dirty=true;this.sync();FlowMVC.mvc.store.AbstractStore.logger.debug("update: updating Touch model with "+e)}}}});