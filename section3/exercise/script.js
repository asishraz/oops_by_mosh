function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });

  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
  });

  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
  });

  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
  });

  Stopwatch.prototype.start = function () {
    if (this.running) throw new Error("already started");

    this.running = true;
    this.startTime = new Date();
    return startTime;
  };

  Stopwatch.prototype.stop = function () {
    if (!this.running) throw new Error("Stopwatch is not started");

    this.running = false;
    this.endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    this.duration += seconds;
    return endTime;
  };

  Stopwatch.prototype.reset = function () {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
  };

  //   Object.defineProperty(this, "duration", {
  //     get: function () {
  //       return duration;
  //     },
  //   });
}

const sw = new Stopwatch();

// this.start = function () {
//     if (running) throw new Error("already started");

//     running = true;
//     startTime = new Date();
//     return startTime;
//   };

//   this.stop = function () {
//     if (!running) throw new Error("Stopwatch is not started");

//     running = false;
//     endTime = new Date();

//     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//     duration += seconds;

//     return endTime;
//   };

//   this.reset = function () {
//     startTime = null;
//     endTime = null;
//     running = false;
//     duration = 0;
//   };
