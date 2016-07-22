System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            username: "Windward",
                            handle: "@windwardstudios",
                            tweet: "Lorem impsum 1 xD",
                            avatar: "http://lorempixel.com/100/100/people?1"
                        },
                        {
                            username: "Angular JS News",
                            handle: "@angularjs_news",
                            tweet: "Lorem impsum 2 xD",
                            avatar: "http://lorempixel.com/100/100/people?2"
                        },
                        {
                            username: "UX & Bootstrap",
                            handle: "@3rdwave",
                            tweet: "Lorem impsum 3 xD",
                            avatar: "http://lorempixel.com/100/100/people?3"
                        }];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map