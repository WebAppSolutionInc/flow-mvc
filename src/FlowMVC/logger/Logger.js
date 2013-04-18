/*
 Copyright (c) 2013 [Web App Solution, Inc.](mailto:admin@webappsolution.com)

 FlowMVC is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 FlowMVC is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with FlowMVC.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * The logger is a wrapper to the Log4JavaScript logger and serves 2 purposes:
 *
 * 1) It's configured with a standard Log4J (java) type configuration.
 * 2) It has a simple accessor method that wraps the logger as a factory so it's easily injected into client objects
 * with a reference to the client instance, allowing the console ouput to contain the client object name without
 * additional configuration.
 */

/*
Jesse, can you create a logger that wraps the Ext Logger but outputs a format like:

15:52:41:130 DEBUG [FlowMVC.mvc.event.AbstractEvent] - AbstractEvent.Constructor: type = flowMVCEvent 

thinking the following:
1) easy way to use like log4j with timestamp syntax
2) easy config that pulls in class it's using as part of the log msg -- can probably just reuse the stuff I have our Logger.getLogge() method now.
3) ability to add json vars to tokens; eg 

logger.debug("execute: first = {0}, last = {1}", [first, last]);

OR 

logger.debug("execute: first = {first}, last = {last}", { "first":first, "last":last });
*/

/*
msg: The message to log (required).
level: One of: "error", "warn", "info" or "log" (the default is "log").
dump: An object to dump to the log as part of the message.
stack: True to include a stack trace in the log.
indent: Cause subsequent log statements to be indented one step.
outdent: Cause this and following statements to be one step less indented.
*/

Ext.define("FlowMVC.logger.Logger",
{

  statics:
  {
    getLogger: function(name)
    {
      var tempLogger;
      var browserAppender;
      var patternLayout;

      if(typeof name != "string")
      {
        name = Ext.ClassManager.getName(name);
      }

      // [jwarden 4.18.2013] TODO: Brian, need help here creating
      // a unique instance + a formatted target like log4j did.

      tempLogger = Ext.create("FlowMVC.logger.Logger");
      //tempLogger.setLevel(log4javascript.Level.ALL);

      //browserAppender = new log4javascript.BrowserConsoleAppender();
      //patternLayout = new log4javascript.PatternLayout("%d{HH:mm:ss:SSS} %-5p [%c] - %m");
      //browserAppender.setLayout(patternLayout);
      //tempLogger.addAppender(browserAppender);

      //        tempLogger.error("WASI =================================");

      return tempLogger;
    }
  },

  internalLog: function(level, args)
  {
    // [jwarden 4.8.2013] TODO: verify multiple args, works in log4javascript
    // var indent = false;

    // Ext.log({level: level, msg: args, dump: dumpObj});
    // if(args && args.length > 0)
    // {
    //   indent = true;
    // }

    switch(level)
    {
      case "log":
      case "debug":
        try{console.debug.apply(console, args);}catch(e){}
        break;
      case "info":
        try{console.info.apply(console, args);}catch(e){}
        break;
      case "warn":
        try{console.warn.apply(console, args);}catch(e){}
        break;
      case "error":
      case "fatal":
        try{console.error.apply(console, args);}catch(e){}
        break;
    }
    
  },

  log: function()
  {
    this.internalLog("log", arguments);
  },

  debug: function()
  {
    this.internalLog("debug", arguments);
  },

  info: function()
  {
    this.internalLog("info", arguments);
  },

  warn: function()
  {
     this.internalLog("warn", arguments);
  },

  error: function()
  {
    this.internalLog("error", arguments);
  },

  fatal: function()
  {
    this.internalLog("fatal", arguments);
  }

});



// Ext.define("FlowMVC.logger.Logger", {

//     statics: {

//         /**
//          * Returns an object of the logger as a factory so it can be injected into client objects. The factory is used
//          * so we can use the reference to the instance of the object it's injected into, thus allowing log messages
//          * to take the following format:
//          *
//          * 16:11:45:956 DEBUG [CafeTownsend.controller.AuthenticationController] - login: username = a, password = a
//          *
//          * The use of the singleton property of the returned object ensures that the logger is unique and created
//          * for each injection, again allowing the logger to gain a reference to the instance it's injected into.
//          *
//          * @returns {{fn: Function, singleton: boolean}}
//          */
//         getInjectableLogger: function() {

//             return {
//                 // The factory function will be passed a single argument:
//                 // The object instance that the new object will be injected into
//                 // NOTE: the factory function for DeftJS must be named "fn"
//                 fn: function(instance) {
//                     return FlowMVC.logger.Logger.getLogger(instance);
//                 },
//                 singleton: false
//             }
//         },

//         /**
//          * Creates a log4JavaScript logger that outputs the following format:
//          *
//          * 16:11:45:956 DEBUG [CafeTownsend.controller.AuthenticationController] - login: username = a, password = a
//          *
//          * @param {String} name The string name used for the logger. This is often the class name of the object the
//          * logger is used in.
//          * @returns {*} A log4JavaScript logger.
//          */
//         getLogger: function(name) {
//             var tempLogger;
//             var browserAppender;
//             var patternLayout;

//             if(typeof name != "string") {
//                 name = Ext.ClassManager.getName(name);
//             }

//             tempLogger = log4javascript.getLogger(name);
//             tempLogger.setLevel(log4javascript.Level.ALL);

//             browserAppender = new log4javascript.BrowserConsoleAppender();
//             patternLayout = new log4javascript.PatternLayout("%d{HH:mm:ss:SSS} %-5p [%c] - %m");
//             browserAppender.setLayout(patternLayout);
//             tempLogger.addAppender(browserAppender);

//             //        tempLogger.error("WASI =================================");

//             return tempLogger;
//         }
//     }
// });

