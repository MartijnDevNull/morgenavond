$('.rolldown-list li').each(function () {
    var delay = ($(this).index() / 10) + 's';

    console.log('index e delay', $(this).index(), delay);

    $(this).css({
        webkitAnimationDelay: delay,
        mozAnimationDelay: delay,
        animationDelay: delay
    });
});

(function() {
    var Glitch, glitch;

    Glitch = class Glitch {
        constructor(config) {
            this.config = config;
            this.img = this.config.img;
            this.data = this.img.getAttribute("src");
            this.maxGlitch = this.config.maxGlitch;
            this.offset = this.config.offset;
        }

        init() {
            return this.tick();
        }

        tick() {
            var corrupted, glitch, i, j, p, ref;
            corrupted = this.data;
            if (Math.random() > .7) {
                glitch = Math.round(Math.random() * this.maxGlitch);
                for (i = j = 0, ref = glitch; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
                    p = this.offset + Math.round(Math.random() * (corrupted.length - this.offset - 1));
                    corrupted = corrupted.substr(0, p) + corrupted.charAt(p + 1) + corrupted.charAt(p) + corrupted.substr(p + 2);
                }
            }
            this.img.setAttribute("src", corrupted);
            return requestAnimationFrame(this.tick.bind(this));
        }

    };

    glitch = new Glitch({
        img: document.getElementById("glitch"),
        maxGlitch: 20,
        offset: 20000
    });

    glitch.init();

}).call(this);