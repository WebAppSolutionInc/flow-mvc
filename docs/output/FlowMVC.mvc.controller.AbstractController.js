Ext.data.JsonP.FlowMVC_mvc_controller_AbstractController({"extends":"Ext.app.Controller","uses":[],"subclasses":[],"superclasses":["Ext.app.Controller"],"component":false,"tagname":"class","meta":{},"code_type":"ext_define","requires":[],"mixedInto":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.app.Controller<div class='subclass '><strong>FlowMVC.mvc.controller.AbstractController</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/AbstractController.html#FlowMVC-mvc-controller-AbstractController' target='_blank'>AbstractController.js</a></div></pre><div class='doc-contents'><p>The abstract controller class provides base functionality for all application controllers. The main purpose\nof this class is to offer helper methods for service execution via the methods executeServiceCall(),\nexecuteServiceCallWithAsyncToken(), and executeServiceCallWithPromises(). These methods wrap service calls</p>\n\n<p>TODO</p>\n\n<p>is to simplify inter-controller communication by setting up application-level event bus listeners\nduring initialization. This can be done</p>\n\n<p>setupGlobalEventListeners()</p>\n\n<p>NOTE: removeGlobalEventListener() isn't currently implemented.</p>\n\n<p>In addition, the abstract controller provides some convenience methods that simplify service calls that use custom\nsuccess and failure handlers:</p>\n\n<p>executeServiceCall(service, method, args, success, failure, scope)</p>\n\n<p>The abstract controller is also the base class for all view mediators; we're really relying on Sencha\nMVC design where a controller knows how to interact with a given view, so the base, abstract mediator extends\nthis abstract controller.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-eventBus' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FlowMVC.mvc.controller.AbstractController'>FlowMVC.mvc.controller.AbstractController</span><br/><a href='source/AbstractController.html#FlowMVC-mvc-controller-AbstractController-cfg-eventBus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/FlowMVC.mvc.controller.AbstractController-cfg-eventBus' class='name expandable'>eventBus</a><span> : <a href=\"#!/api/FlowMVC.mvc.event.EventDispatcher\" rel=\"FlowMVC.mvc.event.EventDispatcher\" class=\"docClass\">FlowMVC.mvc.event.EventDispatcher</a></span></div><div class='description'><div class='short'>The application-level event bus. ...</div><div class='long'><p>The application-level event bus. This is\ninjected</p>\n</div></div></div><div id='cfg-sessionToken' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FlowMVC.mvc.controller.AbstractController'>FlowMVC.mvc.controller.AbstractController</span><br/><a href='source/AbstractController.html#FlowMVC-mvc-controller-AbstractController-cfg-sessionToken' target='_blank' class='view-source'>view source</a></div><a href='#!/api/FlowMVC.mvc.controller.AbstractController-cfg-sessionToken' class='name expandable'>sessionToken</a><span> : String</span></div><div class='description'><div class='short'>The session token for the Application. ...</div><div class='long'><p>The session token for the Application. This should be a single string without\nspaces or periods because it is used as the Application's global namespace.</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Properties</h3><div id='property-inject' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FlowMVC.mvc.controller.AbstractController'>FlowMVC.mvc.controller.AbstractController</span><br/><a href='source/AbstractController.html#FlowMVC-mvc-controller-AbstractController-property-inject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/FlowMVC.mvc.controller.AbstractController-property-inject' class='name expandable'>inject</a><span> : Array</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[&quot;eventBus&quot;]</code></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Properties</h3><div id='property-ROOT_APPLICATION' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FlowMVC.mvc.controller.AbstractController'>FlowMVC.mvc.controller.AbstractController</span><br/><a href='source/AbstractController.html#FlowMVC-mvc-controller-AbstractController-property-ROOT_APPLICATION' target='_blank' class='view-source'>view source</a></div><a href='#!/api/FlowMVC.mvc.controller.AbstractController-property-ROOT_APPLICATION' class='name not-expandable'>ROOT_APPLICATION</a><span> : Object</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'><p>{Ext.app.Application} ROOT_APPLICATION The Application instance this Controller is attached to.</p>\n</div><div class='long'><p>{Ext.app.Application} ROOT_APPLICATION The Application instance this Controller is attached to.</p>\n</div></div></div><div id='property-logger' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FlowMVC.mvc.controller.AbstractController'>FlowMVC.mvc.controller.AbstractController</span><br/><a href='source/AbstractController.html#FlowMVC-mvc-controller-AbstractController-property-logger' target='_blank' class='view-source'>view source</a></div><a href='#!/api/FlowMVC.mvc.controller.AbstractController-property-logger' class='name not-expandable'>logger</a><span> : Object</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'><p>The logger for the object.</p>\n</div><div class='long'><p>The logger for the object.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-executeServiceCall' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FlowMVC.mvc.controller.AbstractController'>FlowMVC.mvc.controller.AbstractController</span><br/><a href='source/AbstractController.html#FlowMVC-mvc-controller-AbstractController-method-executeServiceCall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/FlowMVC.mvc.controller.AbstractController-method-executeServiceCall' class='name expandable'>executeServiceCall</a>( <span class='pre'>service, method, args, success, failure, scope</span> )</div><div class='description'><div class='short'>Simplifies the process of executing a service call that requires custom asynchronous success and failure\nhandlers; cr...</div><div class='long'><p>Simplifies the process of executing a service call that requires custom asynchronous success and failure\nhandlers; create a responder object and add it to the service before making the actual service call.</p>\n\n<p>Note that the service call isn't passed in as a function that actually executes the service; it's passed\nin via a reference to the service object, the actual service method, and the service method's parameters.\nThis is done to prevent the service call from being executed before the responder is being set on it.</p>\n\n<h2>Example</h2>\n\n<p>var service = this.getAuthenticationService();\nthis.executeServiceCall(service, service.authenticate, [username, password], this.loginSuccess, this.loginFailure, this);</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>service</span> : Object<div class='sub-desc'><p>Reference to the actual service.</p>\n</div></li><li><span class='pre'>method</span> : Function<div class='sub-desc'><p>Reference to the method on the service object that makes the call.</p>\n</div></li><li><span class='pre'>args</span> : Array<div class='sub-desc'><p>Array of parameters used in the service calls method.</p>\n</div></li><li><span class='pre'>success</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>failure</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-executeServiceCallWithAsyncToken' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FlowMVC.mvc.controller.AbstractController'>FlowMVC.mvc.controller.AbstractController</span><br/><a href='source/AbstractController.html#FlowMVC-mvc-controller-AbstractController-method-executeServiceCallWithAsyncToken' target='_blank' class='view-source'>view source</a></div><a href='#!/api/FlowMVC.mvc.controller.AbstractController-method-executeServiceCallWithAsyncToken' class='name expandable'>executeServiceCallWithAsyncToken</a>( <span class='pre'>service, method, args, success, failure, scope</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>service</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>method</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>success</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>failure</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-executeServiceCallWithPromises' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FlowMVC.mvc.controller.AbstractController'>FlowMVC.mvc.controller.AbstractController</span><br/><a href='source/AbstractController.html#FlowMVC-mvc-controller-AbstractController-method-executeServiceCallWithPromises' target='_blank' class='view-source'>view source</a></div><a href='#!/api/FlowMVC.mvc.controller.AbstractController-method-executeServiceCallWithPromises' class='name expandable'>executeServiceCallWithPromises</a>( <span class='pre'>service, method, args, success, failure, scope</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>service</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>method</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>success</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>failure</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEventBus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FlowMVC.mvc.controller.AbstractController'>FlowMVC.mvc.controller.AbstractController</span><br/><a href='source/AbstractController.html#FlowMVC-mvc-controller-AbstractController-cfg-eventBus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/FlowMVC.mvc.controller.AbstractController-method-getEventBus' class='name expandable'>getEventBus</a>( <span class='pre'></span> ) : <a href=\"#!/api/FlowMVC.mvc.event.EventDispatcher\" rel=\"FlowMVC.mvc.event.EventDispatcher\" class=\"docClass\">FlowMVC.mvc.event.EventDispatcher</a></div><div class='description'><div class='short'>Returns the value of eventBus. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/FlowMVC.mvc.controller.AbstractController-cfg-eventBus\" rel=\"FlowMVC.mvc.controller.AbstractController-cfg-eventBus\" class=\"docClass\">eventBus</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/FlowMVC.mvc.event.EventDispatcher\" rel=\"FlowMVC.mvc.event.EventDispatcher\" class=\"docClass\">FlowMVC.mvc.event.EventDispatcher</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMVCApplication' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FlowMVC.mvc.controller.AbstractController'>FlowMVC.mvc.controller.AbstractController</span><br/><a href='source/AbstractController.html#FlowMVC-mvc-controller-AbstractController-method-getMVCApplication' target='_blank' class='view-source'>view source</a></div><a href='#!/api/FlowMVC.mvc.controller.AbstractController-method-getMVCApplication' class='name expandable'>getMVCApplication</a>( <span class='pre'></span> ) : Object<strong class='deprecated signature' >deprecated</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p>Sencha ExtJS and Touch access the reference to the application in the controller differently; in ExtJS, it's\nthis.application because it's not setup in the config object where getters/setters are automatically generated\nwhereas in Touch, it's this.getApplication(). This method aims to abstract that difference.\n[</p>\n\n        </div>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Ext.app.Application} The Application instance this Controller is attached to. This is\nautomatically provided when using the MVC architecture so should rarely need to be set directly.</p>\n</div></li></ul></div></div></div><div id='method-getService' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FlowMVC.mvc.controller.AbstractController'>FlowMVC.mvc.controller.AbstractController</span><br/><a href='source/AbstractController.html#FlowMVC-mvc-controller-AbstractController-method-getService' target='_blank' class='view-source'>view source</a></div><a href='#!/api/FlowMVC.mvc.controller.AbstractController-method-getService' class='name expandable'>getService</a>( <span class='pre'>className</span> ) : null/Object</div><div class='description'><div class='short'>Simple helper method that is used to get a reference to a service class from it's fully qualified String\ncounterpart. ...</div><div class='long'><p>Simple helper method that is used to get a reference to a service class from it's fully qualified String\ncounterpart.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>className</span> : String/Object<div class='sub-desc'><p>Either a string or an object with a value property containing the fully\nqualified String name of a service class.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>null/Object</span><div class='sub-desc'><p>An instance of the service class or null.</p>\n</div></li></ul></div></div></div><div id='method-getSessionToken' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FlowMVC.mvc.controller.AbstractController'>FlowMVC.mvc.controller.AbstractController</span><br/><a href='source/AbstractController.html#FlowMVC-mvc-controller-AbstractController-cfg-sessionToken' target='_blank' class='view-source'>view source</a></div><a href='#!/api/FlowMVC.mvc.controller.AbstractController-method-getSessionToken' class='name expandable'>getSessionToken</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of sessionToken. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/FlowMVC.mvc.controller.AbstractController-cfg-sessionToken\" rel=\"FlowMVC.mvc.controller.AbstractController-cfg-sessionToken\" class=\"docClass\">sessionToken</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FlowMVC.mvc.controller.AbstractController'>FlowMVC.mvc.controller.AbstractController</span><br/><a href='source/AbstractController.html#FlowMVC-mvc-controller-AbstractController-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/FlowMVC.mvc.controller.AbstractController-method-init' class='name expandable'>init</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Sets up simple accessor method shortcuts for the global event bus. ...</div><div class='long'><p>Sets up simple accessor method shortcuts for the global event bus.</p>\n</div></div></div><div id='method-setEventBus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FlowMVC.mvc.controller.AbstractController'>FlowMVC.mvc.controller.AbstractController</span><br/><a href='source/AbstractController.html#FlowMVC-mvc-controller-AbstractController-cfg-eventBus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/FlowMVC.mvc.controller.AbstractController-method-setEventBus' class='name expandable'>setEventBus</a>( <span class='pre'>eventBus</span> )</div><div class='description'><div class='short'>Sets the value of eventBus. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/FlowMVC.mvc.controller.AbstractController-cfg-eventBus\" rel=\"FlowMVC.mvc.controller.AbstractController-cfg-eventBus\" class=\"docClass\">eventBus</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventBus</span> : <a href=\"#!/api/FlowMVC.mvc.event.EventDispatcher\" rel=\"FlowMVC.mvc.event.EventDispatcher\" class=\"docClass\">FlowMVC.mvc.event.EventDispatcher</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setSessionToken' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FlowMVC.mvc.controller.AbstractController'>FlowMVC.mvc.controller.AbstractController</span><br/><a href='source/AbstractController.html#FlowMVC-mvc-controller-AbstractController-cfg-sessionToken' target='_blank' class='view-source'>view source</a></div><a href='#!/api/FlowMVC.mvc.controller.AbstractController-method-setSessionToken' class='name expandable'>setSessionToken</a>( <span class='pre'>sessionToken</span> )</div><div class='description'><div class='short'>Sets the value of sessionToken. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/FlowMVC.mvc.controller.AbstractController-cfg-sessionToken\" rel=\"FlowMVC.mvc.controller.AbstractController-cfg-sessionToken\" class=\"docClass\">sessionToken</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sessionToken</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setupGlobalEventListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FlowMVC.mvc.controller.AbstractController'>FlowMVC.mvc.controller.AbstractController</span><br/><a href='source/AbstractController.html#FlowMVC-mvc-controller-AbstractController-method-setupGlobalEventListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/FlowMVC.mvc.controller.AbstractController-method-setupGlobalEventListeners' class='name expandable'>setupGlobalEventListeners</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Marker method. ...</div><div class='long'><p>Marker method. Concrete subclasses can implement to setup listeners to the global event bus with\nconfidence that it exists. This is called during the initialization phase of the controller to ensure\nthe reference to the application exists when adding event listeners to it.</p>\n</div></div></div></div></div></div></div>","parentMixins":[],"files":[{"href":"AbstractController.html#FlowMVC-mvc-controller-AbstractController","filename":"AbstractController.js"}],"linenr":18,"inheritable":null,"members":{"cfg":[{"meta":{},"tagname":"cfg","owner":"FlowMVC.mvc.controller.AbstractController","name":"eventBus","id":"cfg-eventBus"},{"meta":{},"tagname":"cfg","owner":"FlowMVC.mvc.controller.AbstractController","name":"sessionToken","id":"cfg-sessionToken"}],"css_var":[],"property":[{"meta":{"private":true},"tagname":"property","owner":"FlowMVC.mvc.controller.AbstractController","name":"inject","id":"property-inject"}],"method":[{"meta":{},"tagname":"method","owner":"FlowMVC.mvc.controller.AbstractController","name":"executeServiceCall","id":"method-executeServiceCall"},{"meta":{"private":true},"tagname":"method","owner":"FlowMVC.mvc.controller.AbstractController","name":"executeServiceCallWithAsyncToken","id":"method-executeServiceCallWithAsyncToken"},{"meta":{},"tagname":"method","owner":"FlowMVC.mvc.controller.AbstractController","name":"executeServiceCallWithPromises","id":"method-executeServiceCallWithPromises"},{"meta":{},"tagname":"method","owner":"FlowMVC.mvc.controller.AbstractController","name":"getEventBus","id":"method-getEventBus"},{"meta":{"deprecated":{"text":"Sencha ExtJS and Touch access the reference to the application in the controller differently; in ExtJS, it's\nthis.application because it's not setup in the config object where getters/setters are automatically generated\nwhereas in Touch, it's this.getApplication(). This method aims to abstract that difference.\n["}},"tagname":"method","owner":"FlowMVC.mvc.controller.AbstractController","name":"getMVCApplication","id":"method-getMVCApplication"},{"meta":{},"tagname":"method","owner":"FlowMVC.mvc.controller.AbstractController","name":"getService","id":"method-getService"},{"meta":{},"tagname":"method","owner":"FlowMVC.mvc.controller.AbstractController","name":"getSessionToken","id":"method-getSessionToken"},{"meta":{},"tagname":"method","owner":"FlowMVC.mvc.controller.AbstractController","name":"init","id":"method-init"},{"meta":{},"tagname":"method","owner":"FlowMVC.mvc.controller.AbstractController","name":"setEventBus","id":"method-setEventBus"},{"meta":{},"tagname":"method","owner":"FlowMVC.mvc.controller.AbstractController","name":"setSessionToken","id":"method-setSessionToken"},{"meta":{},"tagname":"method","owner":"FlowMVC.mvc.controller.AbstractController","name":"setupGlobalEventListeners","id":"method-setupGlobalEventListeners"}],"event":[],"css_mixin":[]},"singleton":false,"override":null,"mixins":[],"private":null,"statics":{"cfg":[],"css_var":[],"property":[{"meta":{"static":true},"tagname":"property","owner":"FlowMVC.mvc.controller.AbstractController","name":"ROOT_APPLICATION","id":"property-ROOT_APPLICATION"},{"meta":{"static":true},"tagname":"property","owner":"FlowMVC.mvc.controller.AbstractController","name":"logger","id":"property-logger"}],"method":[],"event":[],"css_mixin":[]},"name":"FlowMVC.mvc.controller.AbstractController","enum":null,"html_meta":{},"id":"class-FlowMVC.mvc.controller.AbstractController","alternateClassNames":[],"aliases":{},"inheritdoc":null});