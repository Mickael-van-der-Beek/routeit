RouteIt
========

Simple HTTP path router modelled as a trie.

Benchmark results comparing RouteIt and an Express's router for random paths with 0% RegExps:

> For 1 paths and 10000 iterations
> ExpressRouter's time: 351 ms
> RouteIt's time: 130 ms
> For 101 paths and 10000 iterations
> ExpressRouter's time: 559 ms
> RouteIt's time: 146 ms
> For 201 paths and 10000 iterations
> ExpressRouter's time: 807 ms
> RouteIt's time: 130 ms
> For 301 paths and 10000 iterations
> ExpressRouter's time: 1018 ms
> RouteIt's time: 132 ms
> For 401 paths and 10000 iterations
> ExpressRouter's time: 1262 ms
> RouteIt's time: 133 ms
> For 501 paths and 10000 iterations
> ExpressRouter's time: 1531 ms
> RouteIt's time: 138 ms
> For 601 paths and 10000 iterations
> ExpressRouter's time: 1734 ms
> RouteIt's time: 132 ms
> For 701 paths and 10000 iterations
> ExpressRouter's time: 1933 ms
> RouteIt's time: 134 ms
> For 801 paths and 10000 iterations
> ExpressRouter's time: 2049 ms
> RouteIt's time: 129 ms
> For 901 paths and 10000 iterations
> ExpressRouter's time: 2615 ms
> RouteIt's time: 146 ms
> For 1001 paths and 10000 iterations
> ExpressRouter's time: 2590 ms
> RouteIt's time: 134 ms

Benchmark results comparing RouteIt and an Express's router for random paths with 50% RegExps:

> For 1 paths and 10000 iterations
> ExpressRouter's time: 311 ms
> RouteIt's time: 167 ms
> For 101 paths and 10000 iterations
> ExpressRouter's time: 542 ms
> RouteIt's time: 432 ms
> For 201 paths and 10000 iterations
> ExpressRouter's time: 794 ms
> RouteIt's time: 755 ms
> For 301 paths and 10000 iterations
> ExpressRouter's time: 1030 ms
> RouteIt's time: 1068 ms
> For 401 paths and 10000 iterations
> ExpressRouter's time: 1239 ms
> RouteIt's time: 1427 ms
> For 501 paths and 10000 iterations
> ExpressRouter's time: 1485 ms
> RouteIt's time: 1471 ms
> For 601 paths and 10000 iterations
> ExpressRouter's time: 1701 ms
> RouteIt's time: 2063 ms
> For 701 paths and 10000 iterations
> ExpressRouter's time: 1909 ms
> RouteIt's time: 2466 ms
> For 801 paths and 10000 iterations
> ExpressRouter's time: 2125 ms
> RouteIt's time: 2594 ms
> For 901 paths and 10000 iterations
> ExpressRouter's time: 2374 ms
> RouteIt's time: 3047 ms
> For 1001 paths and 10000 iterations
> ExpressRouter's time: 2523 ms
> RouteIt's time: 3603 ms

Benchmark results comparing RouteIt and an Express's router for random paths with 100% RegExps:

> For 1 paths and 10000 iterations
> ExpressRouter's time: 312 ms
> RouteIt's time: 169 ms
> For 101 paths and 10000 iterations
> ExpressRouter's time: 539 ms
> RouteIt's time: 801 ms
> For 201 paths and 10000 iterations
> ExpressRouter's time: 735 ms
> RouteIt's time: 1393 ms
> For 301 paths and 10000 iterations
> ExpressRouter's time: 959 ms
> RouteIt's time: 2209 ms
> For 401 paths and 10000 iterations
> ExpressRouter's time: 1246 ms
> RouteIt's time: 2774 ms
> For 501 paths and 10000 iterations
> ExpressRouter's time: 1491 ms
> RouteIt's time: 3520 ms
> For 601 paths and 10000 iterations
> ExpressRouter's time: 1613 ms
> RouteIt's time: 4531 ms
> For 701 paths and 10000 iterations
> ExpressRouter's time: 1823 ms
> RouteIt's time: 6337 ms
> For 801 paths and 10000 iterations
> ExpressRouter's time: 2530 ms
> RouteIt's time: 8015 ms
> For 901 paths and 10000 iterations
> ExpressRouter's time: 2548 ms
> RouteIt's time: 9045 ms
> For 1001 paths and 10000 iterations
> ExpressRouter's time: 2560 ms
> RouteIt's time: 9207 ms
