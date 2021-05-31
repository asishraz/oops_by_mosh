//   initially duration will be zero
//   sw.duration = should give the duration of start and stop
//   it will take the stopwatch to the initial state

//   at first time we can start the stopwatch
// but the second time,if we again start, it will show an error "Stopwatch has already started"
//   no twice calling for start
// same goes for stop

//   can call stop() only if start() has been started
// otherwise, this will also throw an error
//   no twice calling for stop

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("it is already running");

    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Timer not started");

    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    duration = 0;
    running = false;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch();
