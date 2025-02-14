terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = var.aws_region
}

resource "random_pet" "bucket_suffix" {
}

resource "aws_s3_bucket" "hosting_bucket" {
  bucket = "${var.name}-${random_pet.bucket_suffix.id}"
}

resource "aws_s3_bucket_website_configuration" "hosting_bucket_website_config" {
  bucket = aws_s3_bucket.hosting_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

locals {
  default_bucket_index = "${path.module}/assets/index.html"
}

resource "aws_s3_object" "upload_index_html" {
  bucket = aws_s3_bucket.hosting_bucket.bucket
  key    = "index.html"
  source = local.default_bucket_index
  etag   = filemd5(local.default_bucket_index)
}

resource "aws_cloudfront_distribution" "app_cdn" {
  origin {
    domain_name = aws_s3_bucket.hosting_bucket.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.hosting_bucket.bucket_regional_domain_name
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"



  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    target_origin_id       = aws_s3_bucket.hosting_bucket.bucket_regional_domain_name
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}


resource "aws_route53_zone" "primary" {
  name = var.hostname
}
/*



resource "aws_cognito_user_pool" "user_pool" {
  name                     = var.name
  auto_verified_attributes = ["email"]
}

resource "aws_cognito_identity_provider" "google_cognito_resource" {
  user_pool_id  = aws_cognito_user_pool.example.id
  provider_name = "Google"
  provider_type = "Google"

  provider_details = {
    authorize_scopes = "email"
    client_id        = "your client_id"
    client_secret    = "your client_secret"
  }
}

resource "aws_appsync_graphql_api" "appsync_api" {
  name                = var.name
  authentication_type = var.appsync_authentication_type
}

resource "aws_appsync_datasource" "appsync_datasource" {
  api_id = aws_appsync_graphql_api.appsync_api.id
  name   = "DynamoDB"
  type   = "AMAZON_DYNAMODB"

  dynamodb_config {
    table_name = "example"
    region     = "us-east-1"
  }
}






 */

