variable "parameter_vars" {
  type = map(any)

  default = {
    "AppId" = "BSN205"
  }
}

variable "local_vars" {
  type = map(any)

  default = {
    "region"      = "af-south-1"
    "profile"     = "saml"
    "iam_profile" = "samliam"
  }
}
