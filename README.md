RouteIt
========

Simple HTTP path router modelled as a trie.

Benchmark results comparing RouteIt and a Express-style router for random paths:

> For 1 paths and 10000iterations
> ExpressRouter's time: 2 ms
> RouteIt's time: 2 ms
> For 101 paths and 10000iterations
> ExpressRouter's time: 50 ms
> RouteIt's time: 47 ms
> For 201 paths and 10000iterations
> ExpressRouter's time: 94 ms
> RouteIt's time: 94 ms
> For 301 paths and 10000iterations
> ExpressRouter's time: 137 ms
> RouteIt's time: 136 ms
> For 401 paths and 10000iterations
> ExpressRouter's time: 184 ms
> RouteIt's time: 186 ms
> For 501 paths and 10000iterations
> ExpressRouter's time: 235 ms
> RouteIt's time: 246 ms
> For 601 paths and 10000iterations
> ExpressRouter's time: 278 ms
> RouteIt's time: 272 ms
> For 701 paths and 10000iterations
> ExpressRouter's time: 319 ms
> RouteIt's time: 322 ms
> For 801 paths and 10000iterations
> ExpressRouter's time: 392 ms
> RouteIt's time: 380 ms
> For 901 paths and 10000iterations
> ExpressRouter's time: 433 ms
> RouteIt's time: 421 ms
> For 1001 paths and 10000iterations
> ExpressRouter's time: 474 ms
> RouteIt's time: 463 ms
