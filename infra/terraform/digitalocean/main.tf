terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

provider "digitalocean" {
  token = var.do_token
}

resource "digitalocean_kubernetes_cluster" "k8s_cluster" {
  name    = var.k8s_cluster_name
  region  = var.k8s_cluster_region
  version = var.k8s_cluster_version

  node_pool {
    name       = var.k8s_cluster_node_name
    size       = var.k8s_cluster_node_size
    node_count = var.k8s_cluster_node_count 
  }
}
