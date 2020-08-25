function Quick() {
  c_delay = 0;
  info.innerHTML =
    "Worst complexity: n^2<br/><br/> Average complexity: n*log(n)<br/><br/> Best complexity: n*log(n)";
  quick_sort(0, array_size - 1);

  enable_buttons();
}

function quick_sort(start, end) {
  if (start < end) {
    var piv_pos = quick_partition(start, end);
    quick_sort(start, piv_pos - 1);
    quick_sort(piv_pos + 1, end);
  }
}

function quick_partition(start, end) {
  var i = start + 1;

  var piv = div_sizes[start];
  div_update(divs[start], div_sizes[start], "red");

  for (var j = start + 1; j <= end; j++) {
    if (div_sizes[j] < piv) {
      div_update(divs[j], div_sizes[j], "yellow");

      div_update(divs[i], div_sizes[i], "orange");
      div_update(divs[j], div_sizes[j], "orange");

      var temp = div_sizes[i];
      div_sizes[i] = div_sizes[j];
      div_sizes[j] = temp;

      div_update(divs[i], div_sizes[i], "orange");
      div_update(divs[j], div_sizes[j], "orange");

      div_update(divs[i], div_sizes[i], "turquoise");
      div_update(divs[j], div_sizes[j], "turquoise");

      i += 1;
    }
  }
  div_update(divs[start], div_sizes[start], "orange");
  div_update(divs[i - 1], div_sizes[i - 1], "orange");

  var temp = div_sizes[start];
  div_sizes[start] = div_sizes[i - 1];
  div_sizes[i - 1] = temp;

  div_update(divs[start], div_sizes[start], "orange");
  div_update(divs[i - 1], div_sizes[i - 1], "orange");

  for (var t = start; t <= i; t++) {
    div_update(divs[t], div_sizes[t], "lime");
  }

  return i - 1;
}
