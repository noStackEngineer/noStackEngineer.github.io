---
title: Multithreaded HTTP server in C
summary: An HTTP/1.1 server written from sockets up, with a worker thread pool, per-file reader-writer locks, and an ordered audit log.
kind: Course project
date: 2026-03-01
period: Winter 2026
tags: [C, POSIX threads, Sockets, Concurrency]
links:
  - { label: Code on request, href: "mailto:anthonyreynax@gmail.com?subject=HTTP%20server%20code" }
featured: true
order: 3
---

For UC Santa Cruz's CSE 130 (Principles of Computer Systems Design) I built an HTTP server in C over one quarter, starting with a single-threaded version and ending with a concurrent one.

## How it works

- **Protocol.** It parses HTTP/1.1 requests straight from the socket and supports `GET` and `PUT`, with correct status codes for bad requests and missing files.
- **Concurrency.** A dispatcher thread accepts connections and pushes them onto a bounded, thread-safe queue. A pool of worker threads (size set with `-t`) pops connections off it and handles them.
- **Consistency.** Each file is protected by its own reader-writer lock, looked up in a hash map keyed by URI. Requests for different files run in parallel, many `GET`s can read one file at once, and a `PUT` gets exclusive access.
- **Audit log.** Every request is written to a log under a mutex, so the log order matches the order in which requests took effect.

I also wrote the building blocks it depends on: the bounded queue and a reader-writer lock with reader, writer, or n-way priority, using pthread mutexes and condition variables. The work was tested against provided stress workloads, plus Valgrind for memory errors.
