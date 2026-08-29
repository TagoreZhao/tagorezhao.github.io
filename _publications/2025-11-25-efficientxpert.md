---
title: "EfficientXpert: Efficient Domain Adaptation for Large Language Models via Propagation-Aware Pruning"
collection: publications
category: preprints
permalink: /publication/efficientxpert
date: 2025-11-25
venue: "arXiv preprint arXiv:2511.19935"
authors: >-
  <strong>Songlin Zhao</strong>, Michael Pitts, and Zhuwei Qin
abstract: >-
  Large language models (LLMs) are increasingly adapted into domain-specific variants for applications in law, healthcare, and finance. Their scale, however, limits deployment in resource-constrained settings, and existing compression approaches often either degrade after domain adaptation or require substantial additional computation. We introduce EfficientXpert, a lightweight framework for domain pruning that integrates ForeSight Mask, a propagation-aware criterion for selecting weights to prune without backpropagation, and Partial Brain Surgeon, an efficient closed-form update for low-rank adapters under a fixed sparsity pattern. With fine-tuning cost comparable to standard LoRA, EfficientXpert converts a general pretrained model into a sparse, domain-adapted expert in a single pruning step. Across health and legal benchmarks, EfficientXpert reaches up to 98 percent of dense performance at 40 percent sparsity, improving over prior pruning baselines while matching LoRA training time and staying within 1 percent of LoRA peak GPU memory in our experiments.
excerpt: >-
  A lightweight domain-adaptation framework combining propagation-aware pruning with efficient closed-form updates for low-rank adapters.
paperurl: "https://arxiv.org/abs/2511.19935"
pdfurl: "https://arxiv.org/pdf/2511.19935"
---
