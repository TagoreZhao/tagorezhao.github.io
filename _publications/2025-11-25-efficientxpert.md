---
title: "EfficientXpert: Efficient Domain Adaptation for Large Language Models via Propagation-Aware Pruning"
collection: publications
category: workshops
permalink: /publication/efficientxpert
date: 2026-10-03
venue: "Accepted at NeurIPS 2026 Workshop — On-Device Intelligence: Foundation Models under Real-World Constraints"
authors: >-
  <strong>Songlin Zhao</strong>, Michael Pitts, and Zhuwei Qin
abstract: >-
  Large language models (LLMs) are increasingly adapted into domain-specific variants for applications in law, healthcare, and finance. Their scale, however, limits deployment in resource-constrained settings, and existing compression approaches often either degrade after domain adaptation or require substantial additional computation. We introduce EfficientXpert, a lightweight framework for domain pruning that integrates ForeSight Mask, a propagation-aware criterion for selecting weights to prune without backpropagation, and Partial Brain Surgeon, an efficient closed-form update for low-rank adapters under a fixed sparsity pattern. With fine-tuning cost comparable to standard LoRA, EfficientXpert converts a general pretrained model into a sparse, domain-adapted expert in a single pruning step. Across health and legal benchmarks, EfficientXpert reaches up to 98 percent of dense performance at 40 percent sparsity, improving over prior pruning baselines while matching LoRA training time and staying within 1 percent of LoRA peak GPU memory in our experiments.
excerpt: >-
  A lightweight domain-adaptation framework combining propagation-aware pruning with efficient closed-form updates for low-rank adapters.
paperurl: "https://arxiv.org/abs/2511.19935"
pdfurl: "https://arxiv.org/pdf/2511.19935"
venueurl: "https://odi2026.github.io/"
codeurl: "https://github.com/TagoreZhao/Efficient_Domain_Adaptation"
---
