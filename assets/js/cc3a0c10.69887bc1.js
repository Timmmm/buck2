"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6819],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>f,mdx:()=>b,useMDXComponents:()=>d,withMDXComponents:()=>u});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),u=function(e){return function(n){var t=d(n.components);return o.createElement(e,i({},n,{components:t}))}},d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},f=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),f=r,h=u["".concat(a,".").concat(f)]||u[f]||p[f]||i;return t?o.createElement(h,s(s({ref:n},c),{},{components:t})):o.createElement(h,s({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[h]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},24345:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const i={id:"run",title:"run"},a=void 0,s={unversionedId:"users/commands/run",id:"users/commands/run",title:"run",description:"These are the flags/commands under buck2 run and their --help output:",source:"@site/../docs/users/commands/run.generated.md",sourceDirName:"users/commands",slug:"/users/commands/run",permalink:"/docs/users/commands/run",draft:!1,tags:[],version:"current",frontMatter:{id:"run",title:"run"},sidebar:"manualSidebar",previous:{title:"root",permalink:"/docs/users/commands/root"},next:{title:"server",permalink:"/docs/users/commands/server"}},l={},c=[{value:"buck run",id:"buck-run",level:2}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"These are the flags/commands under ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck2 run")," and their ",(0,r.mdx)("inlineCode",{parentName:"p"},"--help")," output:"),(0,r.mdx)("h2",{id:"buck-run"},"buck run"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},"buck2-release-run \nBuild and run the selected target.\n\nThe Build ID for the underlying build execution is made available to the target in the\n`BUCK_RUN_BUILD_ID` environment variable.\n\nUSAGE:\n    buck2-release run [OPTIONS] <TARGET> [--] [TARGET_ARGS]...\n\nARGS:\n    <TARGET>\n            Target to build and run\n\n    <TARGET_ARGS>...\n            Additional arguments passed to the target when running it\n\nOPTIONS:\n        --build-report <PATH>\n            Print a build report\n            \n            --build-report=- will print the build report to stdout --build-report=<filepath> will\n            write the build report to the file\n\n    -c, --config <SECTION.OPTION=VALUE>\n            List of config options\n\n        --chdir <CHDIR>\n            Set the current working directory of the executable being run\n\n        --client-metadata <CLIENT_METADATA>\n            Metadata key-value pairs to inject into Buck2's logging. Client metadata must be of the\n            form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n            datasets\n\n        --command-args-file <COMMAND_ARGS_FILE>\n            Write the command to a file instead of executing it.\n\n        --config-file <PATH>\n            List of config file paths\n\n        --console <super|simple|...>\n            Which console to use for this command\n            \n            [env: BUCK_CONSOLE=]\n            [default: auto]\n            [possible values: simple, simplenotty, simpletty, super, auto, none]\n\n        --disable-starlark-types\n            Disable runtime type checking in Starlark interpreter.\n            \n            This option is not stable, and can be used only locally to diagnose evaluation\n            performance problems.\n\n        --eager-dep-files\n            Process dep files when they are generated (i.e. after running a command that produces\n            dep files), rather than when they are used (i.e. before re-running a command that\n            previously produced dep files). Use this when debugging commands that produce dep files.\n            Note that commands that previously produced dep files will not re-run: only dep files\n            produced during this command will be eagerly loaded\n\n        --emit-shell\n            Instead of running the command, print out the command formatted for shell interpolation,\n            use as: $(buck2 run --emit-shell ...)\n\n        --event-log <PATH>\n            Write events to this log file\n\n        --exit-when-different-state\n            Used for exiting a concurrent command when a different state is detected\n\n        --fail-fast\n            If Buck hits an error, do as little work as possible before exiting.\n            \n            To illustrate the effect of this flag, consider an invocation of `build :foo :bar`. The\n            default behavior of buck is to do enough work to get a result for the builds of each of\n            `:foo` and `:bar`, and no more. This means that buck will continue to complete the build\n            of `:bar` after the build of `:foo` has failed; however, once one dependency of `:foo`\n            has failed, other dependencies will be cancelled unless they are needed by `:bar`.\n            \n            This flag changes the behavior of buck to not wait on `:bar` to complete once `:foo` has\n            failed. Generally, this flag only has an effect on builds that specify multiple targets.\n            \n            `--keep-going` changes the behavior of buck to not only wait on `:bar` once one\n            dependency of `:foo` has failed, but to additionally attempt to build other dependencies\n            of `:foo` if possible.\n\n        --fake-arch <ARCH>\n            [possible values: default, aarch64, x8664]\n\n        --fake-host <HOST>\n            [possible values: default, linux, macos, windows]\n\n        --fake-xcode-version <VERSION-BUILD>\n            Value must be formatted as: version-build (e.g., 14.3.0-14C18 or 14.1-14B47b)\n\n    -h, --help\n            Print help information\n\n    -j, --num-threads <THREADS>\n            Number of threads to use during execution (default is # cores)\n\n        --keep-going\n            If Buck hits an error, continue doing as much work as possible before exiting.\n            \n            See `--fail-fast` for more details.\n\n        --local-only\n            Enable only local execution. Will reject actions that cannot execute locally\n            \n            [env: BUCK_OFFLINE_BUILD=]\n\n        --materialize-failed-inputs\n            Materializes inputs for failed actions which ran on RE\n\n        --no-interactive-console\n            Disable console interactions\n            \n            [env: BUCK_NO_INTERACTIVE_CONSOLE=]\n\n        --no-remote-cache\n            Do not perform remote cache queries or cache writes. If remote execution is enabled, the\n            RE service might still deduplicate actions, so for e.g. benchmarking, using a random\n            isolation dir is preferred\n            \n            [env: BUCK_OFFLINE_BUILD=]\n\n        --oncall <ONCALL>\n            The oncall executing this command\n\n        --prefer-local\n            Enable hybrid execution. Will prefer executing actions that can execute locally on the\n            local host\n\n        --prefer-remote\n            Enable hybrid execution. Will prefer executing actions that can execute remotely on RE\n            and will avoid racing local and remote execution\n\n        --remote-only\n            Enable only remote execution. Will reject actions that cannot execute remotely\n\n        --reuse-current-config\n            Re-uses any `--config` values (inline or via modefiles) if there's a previous command,\n            otherwise the flag is ignored.\n            \n            If there is a previous command and `--reuse-current-config` is set, then the old config\n            is used, ignoring any overrides.\n            \n            If there is no previous command but the flag was set, then the flag is ignored, the\n            command behaves as if the flag was not set at all.\n\n        --skip-incompatible-targets\n            If target is incompatible with the specified configuration, skip building instead of\n            throwing error. This does not apply to targets specified with glob patterns `/...` or\n            `:` which are skipped unconditionally\n\n        --skip-missing-targets\n            If target is missing, then skip building instead of throwing error\n\n        --skip-targets-with-duplicate-names\n            If there are targets with duplicate names in `BUCK` file, skip all the duplicates but\n            the first one. This is a hack for TD. Do not use this option\n\n        --stack\n            Record or show target call stacks.\n            \n            Starlark call stacks will be included in duplicate targets error.\n            \n            If a command outputs targets (like `targets` command), starlark call stacks will be\n            printed after the targets.\n\n        --target-platforms <PLATFORM>\n            Configuration target (one) to use to configure targets\n\n        --ui <UI>\n            Configure additional superconsole ui components.\n            \n            Accepts a comma-separated list of superconsole components to add. Possible values are:\n            \n            dice - shows information about evaluated dice nodes debugevents - shows information\n            about the flow of events from buckd\n            \n            These components can be turned on/off interactively. Press 'h' for help when\n            superconsole is active.\n            \n            [possible values: dice, debugevents, io, re]\n\n        --unstable-no-execution\n            Experimental: Disable all execution\n\n        --unstable-write-invocation-record <PATH>\n            Write the invocation record (as JSON) to this path. No guarantees whatsoever are made\n            regarding the stability of the format\n\n        --upload-all-actions\n            Uploads every action to the RE service, regardless of whether the action needs to\n            execute on RE.\n            \n            This is useful when debugging builds and trying to inspect actions which executed\n            remotely. It's possible that the action result is cached but the action itself has\n            expired. In this case, downloading the action itself would fail. Enabling this option\n            would unconditionally upload all actions, thus you will not hit any expiration issues.\n\n    -v, --verbose <VERBOSITY>\n            How verbose buck should be while logging.\n            \n            Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3\n            = more info about everything; 4 = more info about everything + stderr;\n            \n            It can be combined with specific log items (stderr, full_failed_command, commands,\n            actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n            \"-v=1,stderr\"\n            \n            [default: 1]\n\n        --write-build-id <PATH>\n            Write command invocation id into this file\n\n        --write-to-cache-anyway\n            Could be used to enable the action cache writes on the RE worker when no_remote_cache is\n            specified\n\n")))}d.isMDXComponent=!0}}]);