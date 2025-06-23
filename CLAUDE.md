# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`preventr` is an R package that implements the American Heart Association's PREVENT equations for predicting cardiovascular disease risk over 10 and 30 years. It also allows comparison with the older Pooled Cohort Equations (PCEs). The package provides a simple API centered around the `estimate_risk()` function and includes a Shiny web application.

## Key Architecture

### Core Functions
- `estimate_risk()` (alias: `est_risk()`): Main user-facing function in `R/prevent_equations.R`
- `app()`: Launches the Shiny application
- Helper functions in `R/helpers.R` for data conversion and processing
- Model preparation functions in `R/prep_data_for_use.R`
- Alternative model implementations in `R/other_models.R`

### Data Structure
The PREVENT equations consist of 100 sets of coefficients and intercepts:
- 5 cardiovascular outcomes (total CVD, ASCVD, heart failure, CHD, stroke)
- 2 sexes (male/female)
- 5 model types (base, +HbA1c, +UACR, +SDI, full)
- 2 time horizons (10-year, 30-year)

All coefficients are stored in `R/sysdata.rda` and loaded automatically.

### Model Selection Logic
The package automatically selects the most appropriate model based on available input data:
- If additional biomarkers (HbA1c, UACR, SDI) are provided, uses the corresponding enhanced model
- Falls back to base model if enhanced variables are missing
- Validates input data and provides informative error messages

## Development Commands

### Testing
```bash
# Run all tests
Rscript -e "devtools::test()"

# Run tests with testthat directly  
Rscript -e "library(testthat); test_check('preventr')"
```

### Building and Checking
```bash
# Build package
R CMD build .

# Check package (CRAN standards)
R CMD check preventr_*.tar.gz

# Install from source
R CMD INSTALL .

# Or using devtools
Rscript -e "devtools::install()"
```

### Documentation
```bash
# Update documentation
Rscript -e "devtools::document()"

# Build pkgdown site
Rscript -e "pkgdown::build_site()"
```

## Key Files

- `R/prevent_equations.R`: Main estimation logic and user-facing functions
- `R/helpers.R`: Utility functions, data conversion, pipe operator
- `R/prep_data_for_use.R`: Data preparation and validation
- `R/sysdata.rda`: Model coefficients and lookup tables
- `tests/testthat/`: Comprehensive test suite with snapshot testing
- `DESCRIPTION`: Package metadata, dependencies (dplyr is main dependency)

## Testing Strategy

The package uses extensive snapshot testing (`testthat/_snaps/`) to ensure model outputs remain consistent. Tests cover:
- All model types and combinations
- Input validation and error handling  
- Edge cases and boundary conditions
- Comparison with PCE equations

## Data Processing Notes

- All continuous variables are centered around population means
- Uses piecewise linear splines for SBP, BMI, and eGFR
- Cholesterol units can be mg/dL or mmol/L (auto-converts internally)
- Extensive input validation with informative error messages
- Supports both single patient and batch processing via data frames