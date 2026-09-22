# Guardian — metadata transform to Fluent

Record of converting the **Guardian Workplace Access & Identity Governance** application
(`x_aleen_snguardian`) from instance metadata XML into ServiceNow Fluent source code.

| | |
|---|---|
| Date | 2026-09-22 |
| Application | Guardian Workplace Access & Identity Governance |
| Scope | `x_aleen_snguardian` |
| Scope ID | `6026f9b41b14c6106962fe60cd4bcb64` |
| Instance | `aicenter.service-now.com` (alias `aicenter-admin`, SDK default) |
| SDK version | 4.12.2 installed; startup banner reported 4.11.2 |
| Node | v24.21.0 |
| Working directory | `ServiceNow Local\now-git-guardian` |
| Total runtime | **1h 1m 56s** (3,715,907 ms) |
| Outcome | **Transform completed successfully** |

---

## 1. Standards this follows

Local engineering standards live in `ServiceNowDocs/standards/`. The relevant ones:

- `06-build-deploy-standard.md` — transform before build when the instance is ahead
- `03-project-structure.md` — `src/fluent/generated/` is SDK-owned; never hand-edit
- `02-react-ui-page-standard.md` — the React page procedure (next phase of work)

---

## 2. Important correction to the published procedure

The ServiceNow task topic *Convert an application with the ServiceNow SDK* documents a `--preview`
tip for `transform`. **That parameter does not exist in SDK 4.12.2.**

Verified with `now-sdk transform --help`. The actual parameter set is:

```
    --table    Comma-separated table names to transform by table hierarchy
    --force    Allow transforming descendant tables without their parent hierarchy
-d, --debug    Print debug output
    --from     Path to local XML file(s)/directory to transform
    --directory  Path to the directory containing package.json
-a, --auth     Credential alias
-f, --format   Auto-format generated source (default: true)
```

**There is no dry-run mode.** A transform always writes. Back up or commit first.

Separately, `now-sdk convert` was removed in the Australia release family. The current procedure is
`now-sdk init --from <sys_id>` followed by `now-sdk transform`.

---

## 3. Steps executed

### 3.1 Pre-flight checks

```bat
npx @servicenow/sdk auth --list
npx @servicenow/sdk transform --help
node -p "require('./node_modules/@servicenow/sdk/package.json').version"
```

State before the run:

| | |
|---|---|
| `metadata/update` | 9,220 XML files |
| `metadata/dictionary` | 84 |
| `metadata/unload` | 83 |
| `src/` | did not exist |
| Git | repo initialised, **zero commits**, everything untracked |

### 3.2 The transform command

Run from `ServiceNow Local\now-git-guardian` in `cmd.exe`:

```bat
cd /d "c:\Users\anurag.yadav\Alert_Repo\ServiceNow Local\now-git-guardian"
npx @servicenow/sdk transform --from metadata/update --debug > transform-debug.log 2>&1
```

Notes on the command as written:

- `--preview` was **dropped** — not a valid parameter (see section 2).
- `--auth` was **omitted deliberately** so it falls through to the default alias. `auth --list`
  rendered the default as `*[ aicenter-admin]`, with an apparent leading space in the alias name;
  relying on the default avoids having to guess the exact string.
- `--debug` is a global option, not transform-specific.
- Redirecting with `> file 2>&1` in `cmd.exe` produces a clean log. In Windows PowerShell 5.1 the
  same redirection wraps every native-exe stderr line in a `NativeCommandError` — if you must use
  PowerShell, wrap the call as `cmd /c "..."`.

---

## 4. Timeline

Observed by polling `Get-Process node` and the log file. CPU is cumulative process time.

| Wall clock | Phase | Log size | CPU | Working set | `metadata/update` |
|---|---|---|---|---|---|
| 0m 44s | startup, silent | 101 B | 34s | 634 MB | 9,220 |
| 5m 24s | reading, silent | 101 B | 299s | 516 MB | 9,220 |
| 11m 37s | `Parsing records from existing file` | 114 KB | 449s | 1,204 MB | 9,220 |
| 18m 45s | parsing `sys_hub_flow_*` | 2.7 MB | 897s | 2,156 MB | 9,220 |
| 27m 09s | shape transform + commit; `src/` appears | 5.8 MB | 1,442s | 2,903 MB | 9,220 |
| 36m 17s | commit done (255,252 ms); `Removing unused code` | 5.97 MB | 2,054s | 2,866 MB | 9,220 |
| 44m–55m | **silent, no log output**, CPU above one core | 5.97 MB | 2,606 → 3,293s | ~2,850 MB | 9,220 |
| **61m 56s** | **`Transform completed successfully`** | 5.7 MB | — | — | **1,860** |

### Phases, in order

1. `Parsing records from existing file:` — 9,617 unique files. Exceeds the 9,220 in `--from` because
   it also pulls `metadata/dictionary`, `metadata/unload`, and referenced records.
2. `Database contains N records for transformation`
3. `Transforming record into shape:` — 10,168 lines
4. `Committing shape:` — 7,286 lines, finished in 255,252 ms (4m 15s)
5. `Removing the following unused code from …` — tree-shaking unreferenced declarations
6. A long **silent** phase of roughly 18 minutes, CPU-bound with no output — most likely the
   `--format true` prettify pass across 3,436 files
7. Final flush to disk and removal of consumed XML

### Reading the progress signal

- **The log misrepresents liveness.** It sat at 101 bytes for about 10 minutes at the start, and at
  5,973,706 bytes for about 18 minutes at the end. Cumulative **CPU time** is the honest indicator.
- **Output appears only at the very end.** `find src/fluent -name "*.now.ts"` returned 0 right up
  until completion, then jumped to 3,436. A zero count mid-run means nothing.
- **XML is consumed last.** `metadata/update` held at 9,220 for the full hour, then dropped in a
  single step. A mid-run kill therefore costs time, not data.

---

## 5. Results

| | |
|---|---|
| `.now.ts` files generated | **3,436** |
| Supporting files (`.js`, `.html`, `.scss`, `.png`, `.jpg`, `.ico`) | 479 |
| Total under `src/fluent/` | **3,916** |
| XML consumed | **7,360** (9,220 → 1,860) |
| Errors logged | 104 |
| Log file | `transform-debug.log`, 5.7 MB |

### Generated layout

```
src/fluent/generated/
├── automation/            decision-table, flow
├── client-development/    client-script, ui-policy, ui-script
├── data/                  relationship, table, table-column
├── integrations-inbound/  data-source, scripted-rest-api, table-transform-map
├── other/                 ~70 subdirectories for types without a dedicated category
├── properties/            system-property
├── reporting/             report
├── security/              access-control, role
├── server-development/    business-rule, script-include, ui-action
├── service-portal/
└── user-interface/        application-menu, form, list, module, record-producer, view, workspace, …
```

`src/client/` also materialised — `app.tsx`, `main.tsx`, `index.html`, `mc-provision/`,
`mc-provision.css`. Same content as the SNOW-AICENTER working copy, consistent with both pointing at
the same scope and instance.

### Why the XML is deleted

`now-sdk build` compiles **both** `metadata/**` XML and `src/fluent/**` into `dist/app`. Where a
record exists in both forms, the documented tiebreak is that **XML wins**
(`servicenow-sdk-cli-commands.md`, `build-deploy-application-now-sdk.md`). If transform left the XML
in place, edits to the generated `.now.ts` would be silently ignored at install, with no error to
explain why. Deleting the XML is what makes the Fluent file the single definition — it is a move,
not a copy.

Nothing is lost: the record still exists on the instance, the `.now.ts` now describes it, and
`transform` can re-pull at any time.

### The 1,860 files left in `metadata/update` are correct

```
1857  sys_metadata_link
   3  sys_security_acl_role
```

`sys_metadata_link` is explicitly documented as a type that cannot be represented in Fluent and
stays as XML. **Do not delete these** — they remain build inputs.

---

## 6. Errors — 104 lines, all non-fatal

| Count | Error |
|---|---|
| **91** | `Plugin "ListPlugin" failed to get update name for record: sys_ui_list` — `Failed to cast UnresolvedShape to StringShape` |
| 10 | `Failed to find shape for instance <sys_id>` |
| 2 | `Plugin "FlowLogicPlugin" failed to transform "FlowLogicInstanceShape"` — `Failed to cast StringLiteralShape to ObjectShape` |
| 1 | `Failed to parse label_cache string: TypeError: entries is not iterable` |

The run continued through all of them and reported success.

**The 91 `sys_ui_list` failures are the open risk.** Those are list layouts. Their XML was consumed —
no `sys_ui_list` files remain in `metadata/update` — so if the generated Fluent is incomplete, those
layouts now exist only on the instance. Verify before installing:

```bat
dir /b src\fluent\generated\user-interface\list
```

If that is materially short of 91 entries, restore the affected records from the instance or from a
backup of `metadata/update` before any `install`.

Extract the full list of affected records with:

```bat
findstr /C:"ERROR" transform-debug.log > transform-errors.txt
```

---

## 7. Open actions

1. **Commit.** An hour of generated source is untracked. Add `*.log` to `.gitignore` first —
   `transform-debug.log` is 5.7 MB.
2. **Verify the 91 `sys_ui_list` records** (section 6) before anything else.
3. `npm run build` — expect failures from records that did not transform cleanly.
4. **Do not run `now-sdk install` until the diff is reviewed.** A build missing records that exist on
   the instance can remove that configuration from the instance.

---

## 8. Notes for the next run

- **Budget an hour or more** for roughly 9,000 records. The smaller SNOW-AICENTER set took 16m 25s.
- **`--format false`** skips the ~18-minute silent prettify phase. Output is functionally identical;
  run your own prettier afterwards.
- **`--table <names> --from metadata/update`** scopes the run to one table hierarchy — the practical
  way to retry a failed subset without redoing everything. Add `--force` only when transforming
  descendant tables without their parent.
- **If node dies without `Transform completed`**, suspect heap exhaustion and retry with
  `set NODE_OPTIONS=--max-old-space-size=8192`. Peak working set here was about 2.9 GB; Node v24
  scales its default heap with system RAM, so this did not trigger.
- **Commit `metadata/`** — it is generated, but it is the metadata record of the application.
- **Never hand-edit `src/fluent/generated/`** — it is SDK-owned and the next transform overwrites it.

---

## 9. Next phase — React development

`src/client/` exists but does not meet the house stack in `ServiceNowDocs/standards/`. Outstanding
gaps in this repository:

| Gap | Current | Standard |
|---|---|---|
| `now.prebuild.mjs` | absent | required for Tailwind/PostCSS, `@/` alias, deterministic asset names |
| `vite.config.mts` | absent | dev server with an SDK-authenticated proxy |
| Root `tsconfig.json` | absent | client config, plus `src/server/tsconfig.json`; both exclude `**/*.now.ts` |
| `.eslintrc` | absent | `plugin:@servicenow/sdk-app-plugin/recommended` |
| React | 18.2.0 in `dependencies` | 19.x in `devDependencies` |
| Tailwind / shadcn / TanStack Query | none | Tailwind 4 + `sn-shadcn-kit` + TanStack Query v5 |
| `dev` script | absent | `"dev": "vite"` |

**Blocking decision:** `@servicenow/react-components` pins an older React peer range. Standards
forbid mixing two React majors in one bundle — either drop that package and move to React 19, or
stay on 18 and record the pin.

`sn-shadkit-template/` is a working reference with the full stack already wired.

Procedure for adding a page: `ServiceNowDocs/standards/02-react-ui-page-standard.md`.
