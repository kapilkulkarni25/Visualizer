function Selection_sort() {
  c_delay = 0;

  for (var i = 0; i < array_size - 1; i++) {
    div_update(divs[i], div_sizes[i], "orange");

    index_min = i;

    for (var j = i + 1; j < array_size; j++) {
      div_update(divs[j], div_sizes[j], "yellow");

      if (div_sizes[j] < div_sizes[index_min]) {
        if (index_min != i) {
          div_update(divs[index_min], div_sizes[index_min], "turquoise");
        }
        index_min = j;
        div_update(divs[index_min], div_sizes[index_min], "orange");
      } else {
        div_update(divs[j], div_sizes[j], "turquoise");
      }
    }

    if (index_min != i) {
      var temp = div_sizes[index_min];
      div_sizes[index_min] = div_sizes[i];
      div_sizes[i] = temp;

      div_update(divs[index_min], div_sizes[index_min], "orange"); //Height update
      div_update(divs[i], div_sizes[i], "orange"); //Height update
      div_update(divs[index_min], div_sizes[index_min], "turquoise");
    }
    div_update(divs[i], div_sizes[i], "green");
  }
  div_update(divs[i], div_sizes[i], "green");

  enable_buttons();
}
