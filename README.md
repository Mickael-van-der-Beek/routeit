RouteIt
========

Simple HTTP path router modelled as a trie.

Benchmark results comparing RouteIt and an Express-style router for random paths:

> For 1 paths and 10000iterations
> ExpressRouter's time: 99 ms
> RouteIt's time: 128 ms
> For 101 paths and 10000iterations
> ExpressRouter's time: 203 ms
> RouteIt's time: 132 ms
> For 201 paths and 10000iterations
> ExpressRouter's time: 293 ms
> RouteIt's time: 147 ms
> For 301 paths and 10000iterations
> ExpressRouter's time: 423 ms
> RouteIt's time: 154 ms
> For 401 paths and 10000iterations
> ExpressRouter's time: 519 ms
> RouteIt's time: 153 ms
> For 501 paths and 10000iterations
> ExpressRouter's time: 598 ms
> RouteIt's time: 157 ms
> For 601 paths and 10000iterations
> ExpressRouter's time: 710 ms
> RouteIt's time: 149 ms
> For 701 paths and 10000iterations
> ExpressRouter's time: 823 ms
> RouteIt's time: 134 ms
> For 801 paths and 10000iterations
> ExpressRouter's time: 907 ms
> RouteIt's time: 132 ms
> For 901 paths and 10000iterations
> ExpressRouter's time: 1000 ms
> RouteIt's time: 131 ms
> For 1001 paths and 10000iterations
> ExpressRouter's time: 1130 ms
> RouteIt's time: 133 ms
