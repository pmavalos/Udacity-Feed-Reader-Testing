$(function() {

    describe('RSS Feeds', function() {
        it('Feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('URLs are difined', function() {
            for (let x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].url).toBeDefined();
                expect(allFeeds[x].url.length).not.toBe(0);
            };
        });

        it('Names are defined', function(){
            for (let x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].name).toBeDefined();
                expect(allFeeds[x].name.length).not.toBe(0);
            };
        });
    });

    describe('The Menu', function() {
        it('Menu element hiden by default', function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        it('Menu change on click', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('Feed has at least one entry', function() {
                expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });
    
    describe('New Feed Selection', function() {

        let initialFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                initialFeed = $('.feed').html(); // Stores the old feed

                loadFeed(1, function() {
                    done();
                });
            });
        });

        it('New feed is different from old', function() {
            expect($('.feed').html()).not.toEqual(initialFeed);
        });
    });

}());
