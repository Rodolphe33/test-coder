{
  "name": "universeBnB",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "apps/*",
    "libs/*"
  ],
  "scripts": {
    "serve": "nx serve",
    "build": "nx build",
    "test": "nx test",
    "lint": "nx lint",
    "format": "nx format:write",
    "affected:apps": "nx print-affected --type=apps",
    "affected:libs": "nx print-affected --type=libs",
    "affected:build": "nx affected --build",
    "affected:test": "nx affected --test",
    "affected:lint": "nx affected --lint",
    "affected:format": "nx affected --format",
    "affected:dep-graph": "nx affected --dep-graph",
    "affected:report": "nx affected --report",
    "dep-graph": "nx dep-graph",
    "format:check": "nx format:check",
    "workspace-generator": "nx workspace-generator",
    "generate": "nx generate",
    "update": "nx update"
  },
  "devDependencies": {
    "@nrwl/cli": "16.0.0",
    "@nrwl/eslint-plugin-nx": "16.0.0",
    "@nrwl/nest": "16.0.0",
    "@nrwl/angular": "16.0.0",
    "@nrwl/jest": "16.0.0",
    "@nrwl/linter": "16.0.0",
    "@nrwl/workspace": "16.0.0",
    "@types/node": "^16.14.0",
    "eslint": "^8.9.0",
    "typescript": "~4.7.0"
  }
}
```

```json
// apps/web/project.json
{
  "projectType": "application",
  "root": "apps/web",
  "sourceRoot": "apps/web/src",
  "prefix": "universe-bnb",
  "targets": {
    "build": {
      "executor": "@angular-devkit/build-angular:browser",
      "options": {
        "outputPath": "dist/apps/web",
        "index": "apps/web/src/index.html",
        "main": "apps/web/src/main.ts",
        "polyfills": "apps/web/src/polyfills.ts",
        "tsConfig": "apps/web/tsconfig.app.json",
        "assets": [
          "apps/web/src/favicon.ico",
          "apps/web/src/assets"
        ],
        "styles": [
          "apps/web/src/styles.css"
        ],
        "scripts": [],
        "stylesPreprocessorOptions": {
          "includePaths": [
            "apps/web/src/styles"
          ]
        },
        "budgets": [
          {
            "type": "initial",
            "maximumWarning": "2mb",
            "maximumError": "5mb"
          },
          {
            "type": "anyComponentStyle",
            "maximumWarning": "2kb",
            "maximumError": "4kb"
          }
        ],
        "server": "apps/web/src/main.server.ts",
        "prerender": true,
        "ssr": true
      },
      "configurations": {
        "production": {
          "budgets": [
            {
              "type": "initial",
              "maximumWarning": "500kb",
              "maximumError": "1mb"
            },
            {
              "type": "anyComponentStyle",
              "maximumWarning": "1kb",
              "maximumError": "2kb"
            }
          ],
          "fileReplacements": [
            {
              "replace": "apps/web/src/environments/environment.ts",
              "with": "apps/web/src/environments/environment.prod.ts"
            }
          ],
          "outputHashing": "all"
        }
      },
      "defaultConfiguration": "production"
    },
    "serve": {
      "executor": "@angular-devkit/build-angular:dev-server",
      "options": {
        "browserTarget": "web:build"
      },
      "configurations": {
        "production": {
          "browserTarget": "web:build:production"
        }
      },
      "defaultConfiguration": "development"
    },
    "extract-i18n": {
      "executor": "@angular-devkit/build-angular:extract-i18n",
      "options": {
        "browserTarget": "web:build"
      }
    },
    "lint": {
      "executor": "@nrwl/linter:eslint",
      "options": {
        "lintFilePatterns": [
          "apps/web/**/*.ts",
          "apps/web/**/*.html"
        ]
      }
    },
    "test": {
      "executor": "@nrwl/jest:jest",
      "options": {
        "jestConfig": "apps/web/jest.config.js",
        "passWithNoTests": true
      },
      "configurations": {
        "ci": {
          "ci": true,
          "codeCoverage": true
        }
      }
    }
  }
}
```

```json
// apps/mobile/project.json
{
  "projectType": "application",
  "root": "apps/mobile",
  "sourceRoot": "apps/mobile/src",
  "prefix": "universe-bnb",
  "targets": {
    "build": {
      "executor": "@nrwl/angular:browser",
      "options": {
        "outputPath": "dist/apps/mobile",
        "index": "apps/mobile/src/index.html",
        "main": "apps/mobile/src/main.ts",
        "polyfills": "apps/mobile/src/polyfills.ts",
        "tsConfig": "apps/mobile/tsconfig.app.json",
        "assets": [
          "apps/mobile/src/favicon.ico",
          "apps/mobile/src/assets"
        ],
        "styles": [
          "apps/mobile/src/styles.css"
        ],
        "scripts": [],
        "stylesPreprocessorOptions": {
          "includePaths": [
            "apps/mobile/src/styles"
          ]
        },
        "budgets": [
          {
            "type": "initial",
            "maximumWarning": "2mb",
            "maximumError": "5mb"
          },
          {
            "type": "anyComponentStyle",
            "maximumWarning": "2kb",
            "maximumError": "4kb"
          }
        ],
        "server": "apps/mobile/src/main.server.ts",
        "prerender": true,
        "ssr": true
      },
      "configurations": {
        "production": {
          "budgets": [
            {
              "type": "initial",
              "maximumWarning": "500kb",
              "maximumError": "1mb"
            },
            {
              "type": "anyComponentStyle",
              "maximumWarning": "1kb",
              "maximumError": "2kb"
            }
          ],
          "fileReplacements": [
            {
              "replace": "apps/mobile/src/environments/environment.ts",
              "with": "apps/mobile/src/environments/environment.prod.ts"
            }
          ],
          "outputHashing": "all"
        }
      },
      "defaultConfiguration": "production"
    },
    "serve": {
      "executor": "@angular-devkit/build-angular:dev-server",
      "options": {
        "browserTarget": "mobile:build"
      },
      "configurations": {
        "production": {
          "browserTarget": "mobile:build:production"
        }
      },
      "defaultConfiguration": "development"
    },
    "extract-i18n": {
      "executor": "@angular-devkit/build-angular:extract-i18n",
      "options": {
        "browserTarget": "mobile:build"
      }
    },
    "lint": {
      "executor": "@nrwl/linter:eslint",
      "options": {
        "lintFilePatterns": [
          "apps/mobile/**/*.ts",
          "apps/mobile/**/*.html"
        ]
      }
    },
    "test": {
      "executor": "@nrwl/jest:jest",
      "options": {
        "jestConfig": "apps/mobile/jest.config.js",
        "passWithNoTests": true
      },
      "configurations": {
        "ci": {
          "ci": true,
          "codeCoverage": true
        }
      }
    }
  }
}
```

```json
// libs/shared/project.json
{
  "projectType": "library",
  "root": "libs/shared",
  "sourceRoot": "libs/shared/src",
  "prefix": "universe-bnb",
  "targets": {
    "build": {
      "executor": "@nrwl/angular:ng-packagr",
      "options": {
        "project": "libs/shared/ng-package.json"
      }
    },
    "lint": {
      "executor": "@nrwl/linter:eslint",
      "options": {
        "lintFilePatterns": [
          "libs/shared/**/*.ts",
          "libs/shared/**/*.html"
        ]
      }
    },
    "test": {
      "executor": "@nrwl/jest:jest",
      "options": {
        "jestConfig": "libs/shared/jest.config.js",
        "passWithNoTests": true
      },
      "configurations": {
        "ci": {
          "ci": true,
          "codeCoverage": true
        }
      }
    }
  }
}
```

```json
// libs/api/project.json
{
  "projectType": "library",
  "root": "libs/api",
  "sourceRoot": "libs/api/src",
  "prefix": "universe-bnb",
  "targets": {
    "build": {
      "executor": "@nrwl/angular:ng-packagr",
      "options": {
        "project": "libs/api/ng-package.json"
      }
    },
    "lint": {
      "executor": "@nrwl/linter:eslint",
      "options": {
        "lintFilePatterns": [
          "libs/api/**/*.ts",
          "libs/api/**/*.html"
        ]
      }
    },
    "test": {
      "executor": "@nrwl/jest:jest",
      "options": {
        "jestConfig": "libs/api/jest.config.js",
        "passWithNoTests": true
      },
      "configurations": {
        "ci": {
          "ci": true,
          "codeCoverage": true
        }
      }
    }
  }
}
```

```json
// libs/design-system/project.json
{
  "projectType": "library",
  "root": "libs/design-system",
  "sourceRoot": "libs/design-system/src",
  "prefix": "universe-bnb",
  "targets": {
    "build": {
      "executor": "@nrwl/angular:ng-packagr",
      "options": {
        "project": "libs/design-system/ng-package.json"
      }
    },
    "lint": {
      "executor": "@nrwl/linter:eslint",
      "options": {
        "lintFilePatterns": [
          "libs/design-system/**/*.ts",
          "libs/design-system/**/*.html"
        ]
      }
    },
    "test": {
      "executor": "@nrwl/jest:jest",
      "options": {
        "jestConfig": "libs/design-system/jest.config.js",
        "passWithNoTests": true
      },
      "configurations": {
        "ci": {
          "ci": true,
          "codeCoverage": true
        }
      }
    }
  }
}
```

```json
// libs/core/project.json
{
  "projectType": "library",
  "root": "libs/core",
  "sourceRoot": "libs/core/src",
  "prefix": "universe-bnb",
  "targets": {
    "build": {
      "executor": "@nrwl/angular:ng-packagr",
      "options": {
        "project": "libs/core/ng-package.json"
      }
    },
    "lint": {
      "executor": "@nrwl/linter:eslint",
      "options": {
        "lintFilePatterns": [
          "libs/core/**/*.ts",
          "libs/core/**/*.html"
        ]
      }
    },
    "test": {
      "executor": "@nrwl/jest:jest",
      "options": {
        "jestConfig": "libs/core/jest.config.js",
        "passWithNoTests": true
      },
      "configurations": {
        "ci": {
          "ci": true,
          "codeCoverage": true
        }
      }
    }
  }
}
```

```json
// nx.json
{
  "tasksRunnerOptions": {
    "default": {
      "runner": "@nrwl/workspace/tasks-runners/default",
      "options": {
        "cacheableOperations": [
          "build",
          "lint",
          "test"
        ]
      }
    }
  },
  "implicitDependencies": {
    "apps/web": [
      "libs/shared",
      "libs/api",
      "libs/design-system",
      "libs/core"
    ],
    "apps/mobile": [
      "libs/shared",
      "libs/api",
      "libs/design-system",
      "libs/core"
    ],
    "libs/shared": [
      "libs/api",
      "libs/design-system",
      "libs/core"
    ],
    "libs/api": [
      "libs/design-system",
      "libs/core"
    ],
    "libs/design-system": [
      "libs/core"
    ],
    "libs/core": []
  },
  "projects": {
    "apps/web": {
      "tags": []
    },
    "apps/mobile": {
      "tags": []
    },
    "libs/shared": {
      "tags": []
    },
    "libs/api": {
      "tags": []
    },
    "libs/design-system": {
      "tags": []
    },
    "libs/core": {
      "tags": []
    }
  },
  "affected": {
    "defaultBase": "main"
  }
}
```

```json
// tsconfig.base.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "target": "es2022",
    "sourceMap": true,
    "declaration": false,
    "inlineSources": true,
    "lib": [
      "es2022",
      "dom"
    ]
  },
  "include": [
    "apps/**/*",
    "libs/**/*"
  ]
}
```

```json
// tsconfig.json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "baseUrl": ".",
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "files": [],
  "include": [
    "apps/**/*",
    "libs/**/*"
  ]
}
```

```json
// angular.json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "libs",
  "projects": {
    "web": {
      "projectType": "application",
      "schematics": {},
      "root": "apps/web",
      "sourceRoot": "apps/web/src",
      "prefix": "universe-bnb",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/apps/web",
            "index": "apps/web/src/index.html",
            "main": "apps/web/src/main.ts",
            "polyfills": "apps/web/src/polyfills.ts",
            "tsConfig": "apps/web/tsconfig.app.json",
            "assets": [
              "apps/web/src/favicon.ico",
              "apps/web/src/assets"
            ],
            "styles": [
              "apps/web/src/styles.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "apps/web/src/environments/environment.ts",
                  "with": "apps/web/src/environments/environment.prod.ts"
                }
              ],
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "extractCss": true,
              "namedChunks": false,
              "aot": true,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true
            }
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "web:build"
          },
          "configurations": {
            "production": {
              "browserTarget": "web:build:production"
            }
          }
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "web:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "apps/web/src/test.ts",
            "polyfills": "apps/web/src/polyfills.ts",
            "tsConfig": "apps/web/tsconfig.spec.json",
            "karmaConfig": "apps/web/karma.conf.js",
            "assets": [
              "apps/web/src/favicon.ico",
              "apps/web/src/assets"
            ],
            "styles": [
              "apps/web/src/styles.css"
            ],
            "scripts": []
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "apps/web/tsconfig.app.json",
              "apps/web/tsconfig.spec.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    },
    "mobile": {
      "projectType": "application",
      "schematics": {},
      "root": "apps/mobile",
      "sourceRoot": "apps/mobile/src",
      "prefix": "universe-bnb",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/apps/mobile",
            "index": "apps/mobile/src/index.html",
            "main": "apps/mobile/src/main.ts",
            "polyfills": "apps/mobile/src/polyfills.ts",
            "tsConfig": "apps/mobile/tsconfig.app.json",
            "assets": [
              "apps/mobile/src/favicon.ico",
              "apps/mobile/src/assets"
            ],
            "styles": [
              "apps/mobile/src/styles.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "apps/mobile/src/environments/environment.ts",
                  "with": "apps/mobile/src/environments/environment.prod.ts"
                }
              ],
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "extractCss": true,
              "namedChunks": false,
              "aot": true,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true
            }
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "mobile:build"
          },
          "configurations": {
            "production": {
              "browserTarget": "mobile:build:production"
            }
          }
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "mobile:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "apps/mobile/src/test.ts",
            "polyfills": "apps/mobile/src/polyfills.ts",
            "tsConfig": "apps/mobile/tsconfig.spec.json",
            "karmaConfig": "apps/mobile/karma.conf.js",
            "assets": [
              "apps/mobile/src/favicon.ico",
              "apps/mobile/src/assets"
            ],
            "styles": [
              "apps/mobile/src/styles.css"
            ],
            "scripts": []
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "apps/mobile/tsconfig.app.json",
              "apps/mobile/tsconfig.spec.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    }
  }
}
```

```json
// nx.json
{
  "tasksRunnerOptions": {
    "default": {
      "runner": "@nrwl/workspace/tasks-runners/default",
      "options": {
        "cacheableOperations": [
          "build",
          "lint",
          "test"
        ]
      }
    }
  },
  "implicitDependencies": {
    "apps/web": [
      "libs/shared",
      "libs/api",
      "libs/design-system",
      "libs/core"
    ],
    "apps/mobile": [
      "libs/shared",
      "libs/api",
      "libs/design-system",
      "libs/core"
    ],
    "libs/shared": [
      "libs/api",
      "libs/design-system",
      "libs/core"
    ],
    "libs/api": [
      "libs/design-system",
      "libs/core"
    ],
    "libs/design-system": [
      "libs/core"
    ],
    "libs/core": []
  },
  "projects": {
    "apps/web": {
      "tags": []
    },
    "apps/mobile": {
      "tags": []
    },
    "libs/shared": {
      "tags": []
    },
    "libs/api": {
      "tags": []
    },
    "libs/design-system": {
      "tags": []
    },
    "libs/core": {
      "tags": []
    }
  },
  "affected": {
    "defaultBase": "main"
  }
}
```

This is the basic setup for a monorepo using Nx, Angular, and Ionic. The apps/web and apps/mobile directories contain the web and mobile applications, respectively. The libs/shared, libs/api, libs/design-system, and libs/core directories contain shared code, API services, design system components, and core utilities, respectively. The tsconfig.base.json, tsconfig.json, and nx.json files are configuration files for TypeScript, Angular, and Nx, respectively. The angular.json file is a configuration file for Angular.