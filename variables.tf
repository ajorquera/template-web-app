variable "name" {
  description = "The main name of the application"
  type        = string
  validation {
    condition     = length(var.name) > 3
    error_message = "The name must be at least one character long."
  }
}

variable "aws_region" {
  description = "The AWS region to deploy the resources"
  type        = string
  default     = "us-east-1"
}

variable "hostname" {
  description = "The domain of the application"
  type        = string
}

/*

variable "appsync_authentication_type" {
  description = "The authentication type for the AppSync API"
  type        = string
}


*/
