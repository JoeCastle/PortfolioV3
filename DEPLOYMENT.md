# Production Deployment Guide

This document outlines the steps required to deploy the PortfolioV3 application to production.

## Prerequisites

- Ensure you have the latest changes committed to the development branch
- Verify that all tests pass locally
- Confirm that the build process works without errors

## Deployment Steps

### 1. Commit Changes
Make sure all your changes are committed to the development branch

### 2. Version Update
Update the version of the application:
```bash
npm version patch
```
This will automatically:
- Increment the patch version in `package.json`
- Create a new git commit with the version bump
- Create a git tag for the new version

### 3. Build the Application
Create a production build:
```bash
npm run build
```
This generates optimized production files in the `build/` directory. It also runs custom scripts.

### 4. Commit Build Changes
Commit the build artifacts and version changes

### 5. Merge to Master
Merge the development branch into master

### 6. Automatic Deployment
Once merged to master, the build and publish process will happen automatically in Cloudflare. The deployment pipeline will:
- Trigger on the master branch
- Build the application
- Deploy to production

## Important Notes

- **Never commit directly to master**: Always work on the development branch and merge through pull requests.
- **Test before deploying**: Ensure all tests pass and the application works correctly in development. Check for errors.
- **Monitor deployment**: Check the Cloudflare dashboard to confirm successful deployment.
- **Version management**: The `npm version patch` command automatically handles versioning and git tagging.

## Troubleshooting

If the deployment fails:
1. Check the Cloudflare deployment logs
2. Verify the build process works locally
3. Ensure all dependencies are properly installed
4. Review any console errors in the build output

## Rollback

If a deployment needs to be rolled back:
1. Revert to the previous version tag
2. Merge the revert to master
3. Cloudflare will automatically deploy the previous version 