

variable "region" {
  default = "af-south-1"
}
variable "profile" {
  default = "saml"
}

variable "iam_profile" {
  default = "samliam"
}

variable "AppId" {
  default = "BSN205"
}

################################################################
# ECS Variables
################################################################

variable "memory_required" {
  type = map(any)

  default = {
    "frontend" = 2048
    "backend"  = 2048
  }
}

variable "cpu_required" {
  type = map(any)

  default = {
    "frontend" = 1024
    "backend"  = 1024
  }
}

variable "desired_count" {
  type = map(any)

  default = {
    "frontend" = 1
    "backend"  = 1
  }
}

variable "max_size" {
  default = 1
}

variable "min_size" {
  default = 1
}

variable "image_repos_url" {
  type = map(any)

  default = {
    "frontend" = "artifacts.bcp.absa.co.za/architecture-and-engineering-docker-local/kudos-web:latest"
    //"backend"  = "artifacts.bcp.absa.co.za/fatca-crs-it3-sa-docker-local/submissionapi:dev"
  }

}

variable "working_directory" {
  type = map(any)

  default = {
    "frontend" = "/app"
    //"backend"  = "/src"
  }
}

variable "operating_system_family" {
  type = map(any)

  default = {
    "frontend" = "LINUX"
    //"backend"  = "LINUX"
  }
}

variable "cpu_architecture" {
  type = map(any)

  default = {
    "frontend" = "X86_64"
    //"backend"  = "X86_64"
  }
}

/* variable "entrypoint" {
  type = map(any)

  default = {
    "frontend" = ["nginx", "-g", "daemon off;"]
    "backend"  = ["dotnet", "SubmissionAPIv1.dll"]
  }
} */

variable "protocol" {
  type = map(any)

  default = {
    "frontend" = "tcp"
    //"backend"  = "tcp"
  }
}

variable "container_port" {
  type = map(any)

  default = {
    "frontend" = 80
    //"backend"  = 80
  }
}

variable "host_port" {
  type = map(any)

  default = {
    "frontend" = 80
    //"backend"  = 80
  }
}

variable "ecs_backend_required" {
  default = false
}

variable "logging_prefix" {
  default = "s3_logs/ftengdev-afs1-dev-cldfrc-general"
}

variable "logging_bucket" {
  default = "ftengdev-afs1-dev-cldfrc-logging"
}

variable "awslogs_group" {
  default = "/ecs/Dev-sdfs-api"
}

################################################################
# RDS Variables
################################################################

variable "db_deletion_protection" {
  default = false
}

variable "db_exported_logs" {
  default = "postgresql"
}

variable "db_skip_final_snapshot" {
  default = true
}

variable "db_maintenance_window" {
  default = "Sun:01:00-Sun:01:45"
}

variable "db_backup_window" {
  default = "00:00-00:45"
}

variable "db_backup_retention_period" {
  default = 5
}

variable "db_enable_http_endpoint" {
  default = "True"
}

variable "db_engine_mode" {
  default = "provisioned"
}

variable "db_family" {
  default = "aurora-postgresql13"
}

variable "db_cluster_family" {
  default = "aurora-postgresql13"
}

variable "db_port" {
  default = 5432
}

variable "db_engine" {
  default = "aurora-postgresql"
}

variable "db_instance_class" {
  default = "db.t3.medium"
}
