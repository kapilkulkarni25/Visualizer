function Insertion() {
  c_delay = 0;

  for (var j = 0; j < array_size; j++) {
    div_update(divs[j], div_sizes[j], "yellow");

    var key = div_sizes[j];
    var i = j - 1;
    while (i >= 0 && div_sizes[i] > key) {
      div_update(divs[i], div_sizes[i], "orange");
      div_update(divs[i + 1], div_sizes[i + 1], "orange");

      div_sizes[i + 1] = div_sizes[i];

      div_update(divs[i], div_sizes[i], "orange");
      div_update(divs[i + 1], div_sizes[i + 1], "orange");

      div_update(divs[i], div_sizes[i], "turquoise");
      if (i == j - 1) {
        div_update(divs[i + 1], div_sizes[i + 1], "yellow");
      } else {
        div_update(divs[i + 1], div_sizes[i + 1], "turquoise");
      }
      i -= 1;
    }
    div_sizes[i + 1] = key;

    for (var t = 0; t < j; t++) {
      div_update(divs[t], div_sizes[t], "lime");
    }
  }
  div_update(divs[j - 1], div_sizes[j - 1], "lime");

  enable_buttons();
}
