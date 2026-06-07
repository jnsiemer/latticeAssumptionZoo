# Contributing to the Lattice Assumption Zoo

We welcome contributions from the community! Whether you are formalising a new assumption, documenting a recent cryptanalytic break, or refining existing entries, your expertise helps keep this zoo accurate and useful for everyone.

To make contributing as smooth as possible, please review the relevant guide below:
1. [Adding a New Assumption](#-adding-a-new-assumption)
2. [Documenting a Major Cryptanalytic Break](#️-documenting-a-major-cryptanalytic-break)
3. [Making a Revision](#️-making-a-revision)

_Not ready to open a Pull Request? You can also report bugs, request new assumption pages, or discuss topics by opening an issue on our [GitHub Issue Tracker](https://github.com/jnsiemer/latticeAssumptionZoo/issues) or joining the [discussion forum](https://github.com/jnsiemer/latticeAssumptionZoo/discussions)._

## 🔀 How to Submit Your Changes
1. **Fork & Clone:** Fork this repository to your GitHub account, then clone it locally.
2. **New Branch:** Create a new branch for your edits (e.g., `git checkout -b add-assumption`).
3. **Incorporate Changes:** Complete your changes using one of the three guides below.
4. **Verify Changes:** [Host the site locally](README.md#hosting-locally) to ensure the Markdown compiles without LaTeX errors and the graph renders correctly.
5. **Pull Request:** Commit and push your changes to your fork, then open a Pull Request against our `main` branch.

---

## 📚 Important: Managing Citations

Before modifying any markdown files or adding papers, you should ensure the reference exists in `_bibliography/references.bib`.
1. **Check for existence:** Search `references.bib` to ensure the paper isn't already there.
2. **Fetch the record:** Grab the BibTeX entry, preferably from [dblp](https://dblp.org/) or [ePrint](https://eprint.iacr.org/).
3. **Format the key:** Define [`cryptobib`](https://cryptobib.di.ens.fr/)-style keys (e.g. `STOC:GenPeiVai08`).
4. **Ensure convenient access:** To ensure that a paper is accessible within one click, please remove the `doi` field and ensure the `url` field contains the short ePrint URL if one is available (or the next most accessible resource). If the `doi` is the most accessible resource, please keep the field.
5. **Cite in text:** Use the Liquid tag format `{% cite KEY %}` within the markdown files.

---

## 🐣 Adding a New Assumption 

Adding a new assumption requires creating its descriptive page and linking it properly within the interactive graph.

### Step 1: Populate the Assumption Page
Duplicate `_assumptions/template.md`, find the appropriate location for the file within the `_assumptions` folder, and rename it according to the assumption name (as short as possible). Replacing the content of the file is mostly self-explanatory, but pay special attention to:
- **Metadata:** First, remove the attribute `published: false` to ensure the page is rendered. The `family` and `subfamily` attributes should correspond to the file's location in the `_assumptions` folder. `graph_id` will define the displayed name of the assumption in the graph, i.e. keep it short but unambiguous. For `assumption_status`, we only support `standard`, `implied` or `broken`. Please update `last_modified_at` and add a list of all realistic spellings of the assumption below `redirect_from`. Overall, please follow the conventions established by existing assumptions.
- **Escaping:** LaTeX math notation and markdown formatting such as underscores (`_`) or braces (`{}`) clash. Please be aware that the Markdown compiler might sometimes misinterpret these symbols as Markdown. You can prohibit this behaviour by escaping the characters with a backslash (`\`). Please [host the page locally](README.md#hosting-locally) to ensure no such issues exist.
- **Intuition:** Although not every page can meet these aspirations, the purpose of this wiki is to provide an intuition for the assumptions, their robustness, and their applications. Wherever possible, we welcome short, concise descriptions of intuitions that answer questions such as 'What is the core idea of a reduction?' or 'How is a construction composed?'

### Step 2: Add the Node to the Graph
Open `graph/data.js` and add your new assumption using the `assumption()` function under the `/*** Assumptions ***/` section. If your assumption has further variants, please add them as well with `is_variant` set to `true`.

- _Syntax:_ `assumption('label', 'Full Assumption Name', Year_of_Introduction, ['List', 'of', 'Primitives'], '/url/', 'Family', is_variant);`
- _Example:_ `assumption('OM-ISIS', 'One-More-ISIS', 2022, ['Sign', 'PrivEnhSign'], '/omisis/', 'SIS', false);`

`label` defines the the displayed name of the assumption in the graph, i.e. keep it short but unambiguous. Furthermore, the field `label` needs to match the attribute `graph_id` defined in the metadata of the markdown file.

### Step 3: Add Relationships to the Graph
In `graph/data.js` under the `/*** Relations ***/` section, connect your new assumption to existing ones. Use the appropriate functions:
- `reducesTo(from, to)`
- `partiallyReducesTo(from, to, 'Condition')`
- `generalisedBy(from, to)`

### Step 4: Draft a News Post
To notify the community about this new addition via RSS-feed, please write a short announcement in the `_posts` directory.
- **File naming:** Copy the `2026-01-01-template.md` file and rename it formatted as `YYYY-MM-DD-concise-title.md`. Remove the attribute `published: false`.
- **Content:** Keep it concise and straight to the point. Briefly explain the context of the new assumption, why it was introduced, and its primary applications.
- **Link:** Make sure to include a direct link to the newly created assumption page (as well as your paper) so readers can easily view the formal definition and parameters.

---

## ⚠️ Documenting a Major Cryptanalytic Break

If an assumption has been completely or majorly broken, it is crucial to update both its status and the hardness section of the assumption.

### Step 1: Document the Cryptanalysis
Add a concise explanation of the cryptanalytic result, the parameters affected, and cite the paper using the exact lemma or section in the **Hardness** section of the assumption's markdown file.

### Step 2: Update the Graph
If the break invalidates a previous reduction or introduces a new, relevant relationship, modify the relations in `graph/data.js` accordingly.

### Step 3: Update the Status
In the assumption's markdown file, locate the YAML frontmatter at the top of the file and change the `assumption_status` to `"broken"`.

### Step 4: Draft a News Post
Major cryptanalytic results may be propagated via the RSS-feed. Please write a focused announcement in the `_posts` directory.
- **File naming:** Copy the `2026-01-01-template.md` file and rename it formatted as `YYYY-MM-DD-assumption-broken.md`. Remove the attribute `published: false`.
- **Content:** Summarise the key contribution of the break. Clearly state which assumption was targeted, the specific parameters affected, and an intuition of the technique used.
- **Link:** Link directly to the updated assumption page and ensure the relevant paper is cited so researchers can dive into the full analysis.

---

## ✏️ Making a Revision

We encourage editorial changes, parameter updates, or expanding on concisely formatted intuitions.

### Step 1: Edit the Markdown
Make your changes to the relevant file in the `_assumptions/` directory. If you are adding new context that references a paper, remember to [manage the citations](#-important-managing-citations) appropriately.

### Step 2: Synchronise with the Graph
**If you edit the Hardness or Constructions section, please synchronise these with the graph.** 
- Did you mention a new reduction? Add it to `graph/data.js`.
- Did you add a new primitive built from this assumption? Ensure the array of primitives in the `assumption()` function within `graph/data.js` is up-to-date.

---

## 📜 License

By contributing to the Lattice Assumption Zoo, you agree that your contributions will be licensed under the [Mozilla Public License Version 2.0](LICENSE).
