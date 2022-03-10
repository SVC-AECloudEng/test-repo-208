variable "parameter_vars" {
  type = map(any)

  default = {
    "Environment"                         = "dev"
    "region_shorthand"                    = "afs1"
    "CostCenter"                          = "sdfs"
    "Department"                          = "sdfsdfs"
    "DataConfidentiality"                 = "Internal Only"
    "BussinessUnit"                       = "sdfs"
    "Environment"                         = "Dev"
    "TeamName"                            = "sdfs"
    "TeamEmailAddress"                    = "FTEngineeringDevelopers@absa.africa"
    "AppId"                               = "BSN205"
    "Application_Component"               = "sdfs_Dev"
    "Application_Name"                    = "test-app-208"
    "sns_subscription_email_address_list" = "FTEngineeringDevelopers@absa.africa"
    "PersonalData"                        = false
    "auto_on"                             = false
    "auto_off"                            = false
    "is_internal"                         = true
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