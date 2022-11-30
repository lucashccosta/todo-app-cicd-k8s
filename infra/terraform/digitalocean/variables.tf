variable "do_token" {
    type = string
    nullable = false
    description = "Digital Ocean Api Token"
}

variable "k8s_cluster_name" {
    type = string
    default = "k8s-todo-app"
}

variable "k8s_cluster_region" {
    type = string
    default = "nyc1"
}
variable "k8s_cluster_version" {
    type = string
    default = "1.24.4-do.0"
}

variable "k8s_cluster_node_name" {
    type = string
    default = "default"
}

variable "k8s_cluster_node_count" {
    type = number
    default = 2
}

variable "k8s_cluster_node_size" {
    type = string
    default = "s-2vcpu-2gb"
}
