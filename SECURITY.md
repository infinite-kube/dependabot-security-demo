# Security Policy

We rely on GitHub Dependabot alerts + security updates and `npm audit`.
- **Dependabot** compares our dependency graph to the GitHub Advisory Database and opens PRs with CVEs and affected versions.
- **npm audit** compares our lockfile to npm’s database and surfaces issues in CI.

**Triage**
- Critical/High: manual review and merge after tests + impact check.
- Moderate/Low: auto-merge if CI passes (see `.github/workflows/dependabot-auto-merge.yml`).
