function Heap() {
  c_delay = 0;
  info.innerHTML =
    " Worst complexity: n*log(n)  <br/> <br/>Average complexity: n*log(n) <br/> <br/>Best complexity: n*log(n)  <br/><br/>Space complexity: 1 <br/><br/>Stable: No";
  heap_sort();

  enable_buttons();
}

function heap_sort() {
  for (var i = Math.floor(array_size / 2) - 1; i >= 0; i--) {
    max_heapify(array_size, i);
  }

  for (var i = array_size - 1; i > 0; i--) {
    swap(0, i);
    div_update(divs[i], div_sizes[i], "lime");
    div_update(divs[i], div_sizes[i], "yellow");

    max_heapify(i, 0);

    div_update(divs[i], div_sizes[i], "turquoise");
    div_update(divs[i], div_sizes[i], "lime");
  }
  div_update(divs[i], div_sizes[i], "lime");
}

function swap(i, j) {
  div_update(divs[i], div_sizes[i], "orange");
  div_update(divs[j], div_sizes[j], "orange");

  var temp = div_sizes[i];
  div_sizes[i] = div_sizes[j];
  div_sizes[j] = temp;

  div_update(divs[i], div_sizes[i], "orange");
  div_update(divs[j], div_sizes[j], "orange");

  div_update(divs[i], div_sizes[i], "turquoise");
  div_update(divs[j], div_sizes[j], "turquoise");
}

function max_heapify(n, i) {
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;

  if (l < n && div_sizes[l] > div_sizes[largest]) {
    if (largest != i) {
      div_update(divs[largest], div_sizes[largest], "turquoise");
    }

    largest = l;

    div_update(divs[largest], div_sizes[largest], "orange");
  }

  if (r < n && div_sizes[r] > div_sizes[largest]) {
    if (largest != i) {
      div_update(divs[largest], div_sizes[largest], "turquoise");
    }

    largest = r;

    div_update(divs[largest], div_sizes[largest], "orange");
  }

  if (largest != i) {
    swap(i, largest);

    max_heapify(n, largest);
  }
}
