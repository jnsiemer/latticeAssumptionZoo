var assumptions = [];
var relations = [];

/* Adds an assumption with required parameters:
 * - 'label': Displayed label in node (double serves as id), e.g. 'SIS'
 * - 'full_name': Full name of the assumption (displayed on hover), e.g. 'Short Integer Solution'
 * - 'year_published': Year of publication, e.g. 1996
 * - 'primitives': Array should contain primitive if a construction exists, which builds on this assumption
 *     List of primitives is currently limited to: Commitment, ZK, Sign, PrivEnhSign, FuncSign, EffEnhSign, TresholdSign, COAD,
 *     PKE, FuncEnc, PrivEnhEnc, EffEnhEnc, TresholdEnc, COED.
 *     Please add further / more specific ones as a comment
 * - 'url': URL to lattice assumption zoo page of this assumption
 * - 'family': The single family of assumptions that this assumption belongs to.
 *     Possible values are currently ['SIS', 'LWE', 'NTRU', 'LPN', 'LIP']
 * - 'is_variant': Optional parameter. Set this to true, if this assumption is a variant of another assumption.
*/
function assumption(label, full_name, year_published, primitives, url, family, is_variant=false) {
  assumptions.push({
    id: label,
    label: label,
    title: full_name,
    year_published: year_published,
    is_variant: is_variant,
    primitives: primitives,
    url: url,
    group: family,
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
    shape: 'dot',
    hidden: true,
    year_published: 1995,
    is_variant: false,
    primitives: ['assumptionFamilyNode'],
  });

  members.forEach(function(memberId) {
    relations.push({
      from: memberId,
      to: anchorId,
      hidden: true,
      physics: true,
      length: edgeLength,
      relation: "assumptionFamilyEdge",
    });
  });
}


/*** Start of added data ***/

/*** Assumptions ***/

// SIS-based assumptions - family, i.e. last parameter is always 'SIS'
assumption('SIS', 'Short Integer Solution', 1996, ['Commitment', 'ZK', 'Sign'], '/sis/', 'SIS');
assumption('NFSIS', 'Normal Form SIS', 2001, ['Commitment', 'ZK', 'Sign'], '/sis/#normal-form-sis', 'SIS', true); // Micciancio - Improving Lattice Based Cryptosystems Using the Hermite Normal Form
assumption('ISIS', 'Inhomogeneous SIS', 1997, ['Commitment', 'ZK', 'Sign'], '/sis/#inhomogeneous-sis', 'SIS', true); // Ajtai–Dwork - A Public-Key Cryptosystem with Worst-Case/Average-Case Equivalence
assumption('ApproxSIS', 'Approximate SIS', 2019, ['Sign'], '/approxsis/', 'SIS');

assumption('k-SIS', 'k-SIS', 2011, ['Sign', 'TresholdSign', 'COAD'], '/ksis/', 'SIS');
assumption('k-M-ISIS', 'k-M-ISIS', 2022, ['Commitment'], '/kmisis/', 'SIS');
assumption('Twin-k-M-ISIS', 'Twin k-M-ISIS', 2023, ['Commitment'], '/twin-kmisis/', 'SIS');
assumption('Knowledge-k-M-ISIS', 'Knowledge k-M-ISIS', 2022, ['ZK'], '/knowledge-kmisis/', 'SIS');
assumptionFamily('k-SIS', ['k-SIS', 'k-M-ISIS', 'Twin-k-M-ISIS', 'Knowledge-k-M-ISIS']);

assumption('ISISf', 'ISISf', 2023, ['Sign', 'PrivEnhSign'], '/isisf/', 'SIS');
assumption('IntISISf', 'Interactive ISISf', 2023, ['Sign', 'PrivEnhSign'], '/isisf/#interactive-isis_f', 'SIS', true);
assumption('GenISISf', 'Generalised ISISf', 2025, ['Sign', 'PrivEnhSign'], '/genisisf/', 'SIS');
assumption('IntGenISISf', 'Interactive GenISISf', 2025, ['Sign', 'PrivEnhSign'], '/genisisf/#interactive-genisis_f', 'SIS', true);
assumptionFamily('ISISf', ['ISISf', 'IntISISf', 'GenISISf', 'IntGenISISf']);

assumption('OM-ISIS', 'One-More-ISIS', 2022, ['Sign', 'PrivEnhSign'], '/omisis/', 'SIS');
assumption('rOM-ISIS', 'Randomised One-More-ISIS', 2024, ['Sign', 'PrivEnhSign'], '/romisis/', 'SIS');
assumptionFamily('OM-ISIS', ['OM-ISIS', 'rOM-ISIS']);

assumption('BASIS', 'Basis-Augmented SIS', 2023, ['Commitment'], '/basis/', 'SIS');
assumption('BASIS_rand', 'BASIS_rand', 2023, ['Commitment'], '/basis/#BASIS_rand', 'SIS', true);
assumption('BASIS_struct', 'BASIS_struct', 2023, ['Commitment'], '/basis/#BASIS_struct', 'SIS', true);
assumption('BASIS_power', 'BASIS_power', 2023, ['Commitment'], '/basis/#BASIS_power', 'SIS', true);
assumption('h-BASIS', 'h-Basis-Augmented SIS', 2024, ['Commitment'], '/h-basis/', 'SIS');
assumption('h-PRISIS', 'h-PRISIS', 2024, ['Commitment'], '/h-basis/#h-prisis', 'SIS', true);
assumption('l-succinct-SIS', 'l-succinct SIS', 2024, ['Commitment'], '/l-succinct-sis/', 'SIS');
assumptionFamily('BASIS', ['BASIS', 'BASIS_rand', 'BASIS_struct', 'BASIS_power', 'h-BASIS', 'h-PRISIS', 'l-succinct-SIS']);


// LWE-based assumptions - family, i.e. last parameter is always 'LWE'
assumption('LWE', 'Learning with Errors', 2005, ['PKE', 'FuncEnc', 'COED'], '/lwe/', 'LWE');
assumption('ssLWE', 'Short secret LWE', 2009, ['PKE', 'FuncEnc', 'COED'], '/lwe/#short-secret-lwe', 'LWE', true);
assumption('LWR', 'Learning with Rounding', 2012, ['PKE'], '/lwr/', 'LWE');

assumption('Hint-LWE', 'Hint Learning with Errors', 2022, ['Commitment', 'ZK', 'Sign', 'TresholdSign'], '/hint-mlwe/', 'LWE');
assumption('Coset-Hint-LWE', 'Coset Hint Learning with Errors', 2025, ['TresholdEnc'], '/hint-mlwe/#coset-hint-mlwe', 'LWE', true);
assumption('Leaky-LWE', 'Leaky Learning with Errors', 2023, ['FuncEnc', 'TresholdEnc'], '/leaky-lwe/', 'LWE');


assumptionFamily('LeakyLWE', ['Leaky-LWE', 'Hint-MLWE','Coset-Hint-LWE']);

// NTRU-based assumptions - family, i.e. last parameter is always 'NTRU'
assumption('NTRU', 'Number Theorists \'R\' Us or Number Theory Research Unit', 1996, ['Sign', 'PKE', 'COED'], '/ntru/', 'NTRU');


// LIP-based assumptions - family, i.e. last parameter is always 'LIP'
assumption('LIP', 'Lattice Isomorphism Problem', 2022, ['Sign', 'PKE', 'FuncEnc', 'COED'], '/lip/', 'LIP'); /*First consideration in crypto-context*/


// LPN-based assumptions - family, i.e. last parameter is always 'LPN'
assumption('LPN', 'Learning Parity with Noise', 2000, ['Commitment', 'ZK'], '/lpn/', 'LPN'); /*First consideration in crypto-context*/



/*** Relations ***/

// Reductions - "reduces to"
reducesTo('SIS', 'NFSIS');
reducesTo('SIS', 'ISIS');
reducesTo('SIS', 'ApproxSIS');

reducesTo('SIS', 'k-SIS');
reducesTo('k-M-ISIS', 'Twin-k-M-ISIS');

reducesTo('ISISf', 'GenISISf');
reducesTo('ISISf', 'IntISISf');
reducesTo('GenISISf', 'IntGenISISf');

reducesTo('rOM-ISIS', 'OM-ISIS');

reducesTo('SIS', 'BASIS_rand');
reducesTo('BASIS_power', 'h-PRISIS');
reducesTo('k-M-ISIS', 'BASIS_struct');
reducesTo('BASIS_struct', 'l-succinct-SIS');

reducesTo('LWE', 'SIS', 400);
reducesTo('ssLWE', 'LWE');
reducesTo('LWR', 'LWE');

reducesTo('NTRU', 'LWE', 400);

reducesTo('LWE', 'Hint-LWE');
reducesTo('Hint-LWE', 'Coset-Hint-LWE');

reducesTo('LWE','Leaky-LWE');

// Partial Reductions - "partially reduces to"
partiallyReducesTo('SIS', 'k-M-ISIS', 'k-R-ISIS is at least as hard as R-SIS with g*=1 when k<m or the system generated by G is invertible.', 300);

partiallyReducesTo('SIS', 'GenISISf', 'f = RO or f = A_m * x + u', 300);
partiallyReducesTo('SIS', 'ISISf', 'f = RO', 300);

partiallyReducesTo('SIS', 'BASIS', 'SIS reduces to BASIS_rand and M-SIS to PRISIS for l=2');
partiallyReducesTo('SIS', 'BASIS_power', 'M-SIS reduces to PRISIS for l=2', 300);
partiallyReducesTo('SIS', 'h-PRISIS', 'M-SIS reduces to h-PRISIS for l=2', 300);



// Generalisations - "generalised by"
generalisedBy('ISISf', 'GenISISf');
generalisedBy('IntISISf', 'IntGenISISf');

generalisedBy('BASIS_rand', 'BASIS');
generalisedBy('BASIS_struct', 'BASIS');
generalisedBy('BASIS_power', 'BASIS');
generalisedBy('h-PRISIS', 'h-BASIS');
generalisedBy('BASIS', 'h-BASIS', 250);

generalisedBy('LPN', 'LWE', 400);
generalisedBy('Hint-LWE', 'Leaky-LWE', 200);
