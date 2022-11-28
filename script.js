/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/muhammederdem/mini-player
*/

new Vue({
    el: "#app",
    data() {
        return {
            audio: null,
            circleLeft: null,
            barWidth: null,
            duration: null,
            currentTime: null,
            isTimerPlaying: false,
            tracks: [
                {
                    name: "Track Number 2",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-1/Track 56.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                },
                {
                    name: "Track Number 3",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-1/Track 57.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                },
                {
                    name: "Track Number 58",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-1/Track 58.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 59",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-1/Track 59.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 60",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-1/Track 60.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 62",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-2/Track 62.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 63",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-2/Track 63.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track Number 64",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-2/Track 64.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track Number 65",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-2/Track 65.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track Number 66",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-2/Track 66.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 2",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-3/Track 02.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 4",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-3/Track 04.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 5",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-3/Track 05.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 6",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-3/Track 06.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 7",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-3/Track 07.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 9",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-4/Track 09.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 10",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-4/Track 10.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 11",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-4/Track 11.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 14",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-4/Track 14.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 15",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-4/Track 15.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 16",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-4/Track 16.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 17",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-5/Track 17.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 19",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-5/Track 19.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 20",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-5/Track 20.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 21",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-5/Track 21.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 22",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-5/Track 22.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 24",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-6/Track 24.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 25",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-6/Track 25.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 26",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-6/Track 26.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 27",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-6/Track 27.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 28",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-6/Track 28.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 29",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-6/Track 29.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 32",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-7/Track 32.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 34",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-7/Track 34.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 37",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-7/Track 37.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 38",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-8/Track 38.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 40",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-8/Track 40.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 41",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-8/Track 41.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 42",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-8/Track 42.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 43",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-8/Track 43.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
                , {
                    name: "Track 44",
                    artist: "Round Two",
                    cover: "./image.jpg",
                    source: "./audio/R-2-LU-8/Track 44.mp3",
                    url: "https://www.celc.edu.af/site/userlogin",
                    favorited: false
                }
            ],
            currentTrack: null,
            currentTrackIndex: 0,
            transitionName: null
        };
    },
    methods: {
        play() {
            if (this.audio.paused) {
                this.audio.play();
                this.isTimerPlaying = true;
            } else {
                this.audio.pause();
                this.isTimerPlaying = false;
            }
        },
        generateTime() {
            let width = (100 / this.audio.duration) * this.audio.currentTime;
            this.barWidth = width + "%";
            this.circleLeft = width + "%";
            let durmin = Math.floor(this.audio.duration / 60);
            let dursec = Math.floor(this.audio.duration - durmin * 60);
            let curmin = Math.floor(this.audio.currentTime / 60);
            let cursec = Math.floor(this.audio.currentTime - curmin * 60);
            if (durmin < 10) {
                durmin = "0" + durmin;
            }
            if (dursec < 10) {
                dursec = "0" + dursec;
            }
            if (curmin < 10) {
                curmin = "0" + curmin;
            }
            if (cursec < 10) {
                cursec = "0" + cursec;
            }
            this.duration = durmin + ":" + dursec;
            this.currentTime = curmin + ":" + cursec;
        },
        updateBar(x) {
            let progress = this.$refs.progress;
            let maxduration = this.audio.duration;
            let position = x - progress.offsetLeft;
            let percentage = (100 * position) / progress.offsetWidth;
            if (percentage > 100) {
                percentage = 100;
            }
            if (percentage < 0) {
                percentage = 0;
            }
            this.barWidth = percentage + "%";
            this.circleLeft = percentage + "%";
            this.audio.currentTime = (maxduration * percentage) / 100;
            this.audio.play();
        },
        clickProgress(e) {
            this.isTimerPlaying = true;
            this.audio.pause();
            this.updateBar(e.pageX);
        },
        prevTrack() {
            this.transitionName = "scale-in";
            this.isShowCover = false;
            if (this.currentTrackIndex > 0) {
                this.currentTrackIndex--;
            } else {
                this.currentTrackIndex = this.tracks.length - 1;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        nextTrack() {
            this.transitionName = "scale-out";
            this.isShowCover = false;
            if (this.currentTrackIndex < this.tracks.length - 1) {
                this.currentTrackIndex++;
            } else {
                this.currentTrackIndex = 0;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        resetPlayer() {
            this.barWidth = 0;
            this.circleLeft = 0;
            this.audio.currentTime = 0;
            this.audio.src = this.currentTrack.source;
            setTimeout(() => {
                if (this.isTimerPlaying) {
                    this.audio.play();
                } else {
                    this.audio.pause();
                }
            }, 300);
        },
        favorite() {
            this.tracks[this.currentTrackIndex].favorited = !this.tracks[
                this.currentTrackIndex
            ].favorited;
        }
    },
    created() {
        let vm = this;
        this.currentTrack = this.tracks[0];
        this.audio = new Audio();
        this.audio.src = this.currentTrack.source;
        this.audio.ontimeupdate = function () {
            vm.generateTime();
        };
        this.audio.onloadedmetadata = function () {
            vm.generateTime();
        };
        this.audio.onended = function () {
            vm.nextTrack();
            this.isTimerPlaying = true;
        };

        // this is optional (for preload covers)
        for (let index = 0; index < this.tracks.length; index++) {
            const element = this.tracks[index];
            let link = document.createElement('link');
            link.rel = "prefetch";
            link.href = element.cover;
            link.as = "image"
            document.head.appendChild(link)
        }
    }
});