function do_a () {
  console.log("This apperas first")
}

function do_b () {
  console.log("This appears later")
}

do_a ()
do_b ()

function do_c () {
  setTimeout (
    function () {
      console.log("This should appear first. Since it takes longer time, it will appear later")
    }, 1000
  )
}


function do_d () {
  console.log("This should appear later, but it appears first now")
}

do_c ()
do_d ()

function do_e (callback) {
  setTimeout (
    function () {
      console.log("This should appear later. Since callback is used here, it will appear first");

      // if callback is a funciton, then invoke interva
      if (typeof callback === 'function')
      {
        callback();
      }
    }, 3000)
}

function do_f () {
  console.log("This should appear later, even it takes shorter time")
}

do_e(do_f) // if do_f () is typed, do_f() wll be run first
