function Bubble() {
  info.innerHTML =
    "  Worst complexity: n^2<br/> <br/>Average complexity: n^2<br/><br/> Best complexity: n<br/><br/> Space complexity: 1";

  c_delay = 0;

  for (var i = 0; i < array_size - 1; i++) {
    for (var j = 0; j < array_size - i - 1; j++) {
      div_update(divs[j], div_sizes[j], "yellow");
      if (div_sizes[j] > div_sizes[j + 1]) {
        div_update(divs[j], div_sizes[j], "orange");
        div_update(divs[j + 1], div_sizes[j + 1], "orange");
        var temp = div_sizes[j];
        div_sizes[j] = div_sizes[j + 1];
        div_sizes[j + 1] = temp;
        div_update(divs[j], div_sizes[j], "orange");
        div_update(divs[j + 1], div_sizes[j + 1], "orange");
      }
      div_update(divs[j], div_sizes[j], "turquoise");
    }
    div_update(divs[j], div_sizes[j], "lime");
  }
  div_update(divs[0], div_sizes[0], "lime");

  enable_buttons();
}
