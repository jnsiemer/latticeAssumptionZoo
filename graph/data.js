var assumptions = [];
var relations = [];

/* Adds an assumption with required parameters:
 * - 'label': Displayed label in node (double serves as id), e.g. 'SIS'
 * - 'full_name': Full name of the assumption (displayed on hover), e.g. 'Short Integer Solution'
 * - 'published': Year of publication, e.g. 1996
 * - 'primitives': Array should contain primitive if a construction exists, which builds on this assumption
 *     List of primitives is currently limited to: Commitment, ZK, Sign, PrivEnhSign, EffEnhSign, TresholdSign, COAD,
 *     KEX, PKE, PrivEnhEnc, EffEnhEnc, TresholdEnc, COED.
 *     Please add further / more specific ones as a comment
 * - 'url': URL to lattice assumption zoo page of this assumption
 * - 'group': The single group of assumptions that this assumption belongs to.
 *     Possible values are currently ['SIS', 'LWE', 'NTRU', 'LPN', 'LIP']
 * - 'is_variant': Optional parameter. Set this to true, if this assumption is a variant of another assumption.
*/
function assumption(label, full_name, published, primitives, url, group, is_variant=false) {
  assumptions.push({
    id: label,
    label: label,
    title: full_name,
    published: published,
    is_variant: is_variant,
    primitives: primitives,
    url: url,
    group: group,
  });
}

/* Adds a reduction from an assumption to another one.
 * Assumption in 'from' parameter is reduced to assumption in 'to' parameter.
 * - 'edgeLength': Optional parameter. Default is 125.
*/
function reducesTo(from, to, edgeLength = 125) {
  relations.push({
    from: from,
    to: to,
    relation: "reducesTo",
    arrows: "to",
    color: "#0A9396",
    length: edgeLength,
  })
}

/* Adds a partial reduction from an assumption to another one.
 * Assumption in 'from' parameter is reduced to assumption in 'to' parameter.
 * - 'title': Optional parameter if reduction requires additional assumptions. Default is ''.
 * - 'edgeLength': Optional parameter. Default is 125.
*/
function partiallyReducesTo(from, to, title = null, edgeLength = 200) {
  relations.push({
    from: from,
    to: to,
    relation: "partiallyReducesTo",
    arrows: "to",
    color: "#0ecacc",
    dashes: true,
    title: title,
    length: edgeLength,
  })
}

/* Adds a generalisation from an assumption to another one.
 * Assumption in 'from' parameter is generalised by assumption in 'to' parameter.
 * - 'edgeLength': Optional parameter. Default is 125.
*/
function generalisedBy(from, to, edgeLength = 125) {
  relations.push({
    from: from,
    to: to,
    relation: "generalisedBy",
    arrows: {
      to: {
        enabled: true,
        type: "diamond",
      },
    },
    color: "#EE9B00",
    dashes: [1, 4],
    length: edgeLength,
  });
}

/* Creates a smaller family of assumptions that are physically pulled together.
 * - 'familyID': Unique string identifier for the assumption family (e.g., 'ISIS-f')
 * - 'members': Array of assumption identifiers that belong together, e.g., ['ISISf', 'IntISISf', 'GenISISf', 'IntGenISISf']
 * - 'edgeLength': Optional parameter. Default is 50.
*/
function assumptionFamily(familyID, members, edgeLength = 50) {
  const anchorId = "anchor_" + familyID;

  assumptions.push({
    id: anchorId,
    hidden: true,
    shape: 'dot',   // Fallback in case 'hidden' behaves unexpectedly
    size: 0         
  });

  members.forEach(function(memberId) {
    relations.push({
      from: memberId,
      to: anchorId,
      hidden: true,
      physics: true,
      length: edgeLength,
    });
  });
}


/*** Start of added data ***/

/*** Assumptions ***/

// SIS-based assumptions - group, i.e. last parameter is always 'SIS'
assumption('SIS', 'Short Integer Solution', 1996, ['Commitment', 'ZK', 'Sign'], '/sis/', 'SIS');
assumption('NFSIS', 'Normal Form SIS', 2001, ['Commitment', 'ZK', 'Sign'], '/TODO/', 'SIS', true); // Micciancio - Improving Lattice Based Cryptosystems Using the Hermite Normal Form
assumption('ISIS', 'Inhomogeneous SIS', 1997, ['Commitment', 'ZK', 'Sign'], '/TODO/', 'SIS', true); // Ajtai–Dwork - A Public-Key Cryptosystem with Worst-Case/Average-Case Equivalence
assumption('ApproxSIS', 'Approximate SIS', 2019, ['Sign'], '/TODO/', 'SIS');

assumption('k-SIS', 'k-SIS', 2011, ['Sign', 'COAD'], '/TODO/', 'SIS');

assumption('ISISf', 'ISISf', 2023, ['Sign', 'PrivEnhSign'], '/isisf/', 'SIS');
assumption('IntISISf', 'Interactive ISISf', 2023, ['Sign', 'PrivEnhSign'], '/TODO/', 'SIS', true);
assumption('GenISISf', 'Generalised ISISf', 2025, ['Sign', 'PrivEnhSign'], '/genisisf/', 'SIS');
assumption('IntGenISISf', 'Interactive GenISISf', 2025, ['Sign', 'PrivEnhSign'], '/TODO/', 'SIS', true);
assumptionFamily('ISISf', ['ISISf', 'IntISISf', 'GenISISf', 'IntGenISISf']);

assumption('OM-ISIS', 'One-More-ISIS', 2022, ['Sign', 'PrivEnhSign'], '/omisis/', 'SIS');
assumption('rOM-ISIS', 'Randomised One-More-ISIS', 2024, ['Sign', 'PrivEnhSign'], '/romisis/', 'SIS');
assumptionFamily('OM-ISIS', ['OM-ISIS', 'rOM-ISIS']);


// LWE-based assumptions - group, i.e. last parameter is always 'LWE'
assumption('LWE', 'Learning with Errors', 2005, ['KEX', 'PKE'], '/lwe/', 'LWE');


// NTRU-based assumptions - group, i.e. last parameter is always 'NTRU'
assumption('NTRU', 'Number Theorists \'R\' Us or Number Theory Research Unit', 1996, ['KEX', 'PKE', 'Sign'], '/ntru/', 'NTRU');


// LIP-based assumptions - group, i.e. last parameter is always 'LIP'
assumption('LIP', 'Lattice Isomorphism Problem', 2019, ['Sign'], '/lip/', 'LIP'); /*First consideration in crypto-context*/


// LPN-based assumptions - group, i.e. last parameter is always 'LPN'
assumption('LPN', 'Learning Parity with Noise', 2000, ['PKE'], '/lpn/', 'LPN'); /*First consideration in crypto-context*/



/*** Relations ***/

// Reductions - "reduces to"
reducesTo('SIS', 'NFSIS');
reducesTo('SIS', 'ISIS');
reducesTo('SIS', 'ApproxSIS');
reducesTo('SIS', 'k-SIS');

reducesTo('ISISf', 'GenISISf');
reducesTo('ISISf', 'IntISISf');
reducesTo('GenISISf', 'IntGenISISf');

reducesTo('rOM-ISIS', 'OM-ISIS');

reducesTo('LWE', 'SIS', 400);


// Partial Reductions - "partially reduces to"
partiallyReducesTo('SIS', 'GenISISf', 'f = RO or f = A_m * x + u');
partiallyReducesTo('SIS', 'ISISf', 'f = RO');


// Generalisations - "generalised by"
generalisedBy('ISISf', 'GenISISf', 200);
generalisedBy('LPN', 'LWE', 400);
