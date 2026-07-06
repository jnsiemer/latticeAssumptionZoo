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

assumption('Asymmetric-SIS', 'Asymmetric SIS', 2020, ['Sign'], '/asymmetric-sis/', 'SIS');

assumption('Split-SIS', 'Split-SIS', 2015, ['PrivEnhSign'], '/split-sis/', 'SIS');
assumption('Extended-Split-SIS', 'Extended Split-SIS', 2016, ['PrivEnhSign'], '/split-sis/#extended-split-sis', 'SIS', true);
assumptionFamily('Split-SIS', ['Split-SIS', 'Extended-Split-SIS']);

assumption('t-M-ISIS', 't-Module ISIS', 2024, ['Sign'], '/t-misis/', 'SIS');
assumption('t-M-SPISIS', 't-Module Second Preimage ISIS', 2024, ['Sign'], '/t-misis/#t-m-spisis', 'SIS', true);
assumptionFamily('t-M-ISIS', ['t-M-ISIS', 't-M-SPISIS']);

assumption('k-SIS', 'k-SIS', 2011, ['Sign', 'TresholdSign', 'COAD'], '/ksis/', 'SIS');
assumption('k-M-ISIS', 'k-M-ISIS', 2022, ['Commitment'], '/kmisis/', 'SIS');
assumption('Twin-k-M-ISIS', 'Twin k-M-ISIS', 2023, ['Commitment'], '/twin-kmisis/', 'SIS');
assumption('Knowledge-k-M-ISIS', 'Knowledge k-M-ISIS', 2022, ['ZK'], '/knowledge-kmisis/', 'SIS');
assumptionFamily('k-SIS', ['k-SIS', 'k-M-ISIS', 'Twin-k-M-ISIS', 'Knowledge-k-M-ISIS']);

assumption('H-ISIS', 'H-ISIS', 2026, ['Sign'], '/h-isis/', 'SIS');
assumption('H-SIS', 'H-SIS', 2026, ['Sign'], '/h-isis/#h-sis', 'SIS', true);
assumption('H-SIGS', 'H-Short Integer Generating Set', 2026, ['Sign'], '/h-isis/#h-sigs', 'SIS', true);
assumptionFamily('H-SIS', ['H-SIS', 'H-ISIS', 'H-SIGS']);

assumption('SelfTargetMSIS', 'SelfTargetMSIS', 2018, ['Sign'], '/selftargetmsis/', 'SIS');

assumption('ISISf', 'ISISf', 2023, ['Sign', 'PrivEnhSign'], '/isisf/', 'SIS');
assumption('IntISISf', 'Interactive ISISf', 2023, ['Sign', 'PrivEnhSign'], '/isisf/#interactive-isis_f', 'SIS', true);
assumption('GenISISf', 'Generalised ISISf', 2025, ['Sign', 'PrivEnhSign'], '/genisisf/', 'SIS');
assumption('IntGenISISf', 'Interactive GenISISf', 2025, ['Sign', 'PrivEnhSign'], '/genisisf/#interactive-genisis_f', 'SIS', true);
assumptionFamily('ISISf', ['ISISf', 'IntISISf', 'GenISISf', 'IntGenISISf']);

assumption('OM-ISIS', 'One-More-ISIS', 2022, ['Sign', 'PrivEnhSign'], '/omisis/', 'SIS');
assumption('rOM-ISIS', 'Randomised One-More-ISIS', 2024, ['Sign', 'PrivEnhSign'], '/romisis/', 'SIS');
assumptionFamily('OM-ISIS', ['OM-ISIS', 'rOM-ISIS']);

assumption('AOM-MISIS', 'Algebraic One-More Module-ISIS', 2025, ['TresholdSign'], '/aom-misis/', 'SIS');

assumption('BASIS', 'Basis-Augmented SIS', 2023, ['Commitment'], '/basis/', 'SIS');
assumption('BASIS_rand', 'BASIS_rand', 2023, ['Commitment'], '/basis/#BASIS_rand', 'SIS', true);
assumption('BASIS_struct', 'BASIS_struct', 2023, ['Commitment'], '/basis/#BASIS_struct', 'SIS', true);
assumption('BASIS_power', 'BASIS_power', 2023, ['Commitment'], '/basis/#BASIS_power', 'SIS', true);
assumption('h-BASIS', 'h-Basis-Augmented SIS', 2024, ['Commitment'], '/h-basis/', 'SIS');
assumption('h-PRISIS', 'h-PRISIS', 2024, ['Commitment'], '/h-basis/#h-prisis', 'SIS', true);
assumption('l-succinct-SIS', 'l-succinct SIS', 2024, ['Commitment'], '/l-succinct-sis/', 'SIS');
assumptionFamily('BASIS', ['BASIS', 'BASIS_rand', 'BASIS_struct', 'BASIS_power', 'h-BASIS', 'h-PRISIS', 'l-succinct-SIS']);

assumption('Decomposed-SIS', 'Decomposed SIS', 2026, ['Commitment'], '/decomposed-sis/', 'SIS'); // list of constructions is "Hash functions" right now, which doesn't really fit into any current category
assumption('Extended-Decomposed-SIS', 'Extended Decomposed SIS', 2026, ['Commitment'], '/decomposed-sis/#extended-decomposed-sis', 'SIS', true);
assumptionFamily('Decomposed-SIS', ['Decomposed-SIS', 'Extended-Decomposed-SIS']);

assumption('Evasive-SIS', 'Evasive SIS', 2022, ['Sign'], '/evasive-sis/', 'SIS');

assumption('PV-SIS', 'Partial Vandermonde SIS - closely related to Partial Fourier Recovery Problem', 2014, ['Sign', 'EffEnhSign'], '/pv-sis/', 'SIS');
assumption('PNTT-PSIS', 'Partial-NTT Polynomial-SIS', 2022, ['Sign', 'EffEnhSign'], '/pv-sis/#pntt-psis', 'SIS', true);

assumption('ISSIS', 'Inhomogeneous Short and Sparse Integer Solution', 2025, ['Commitment'], '/issis/', 'SIS');


// LWE-based assumptions - family, i.e. last parameter is always 'LWE'
assumption('LWE', 'Learning with Errors', 2005, ['PKE', 'FuncEnc', 'COED'], '/lwe/', 'LWE');
assumption('ssLWE', 'Small-secret LWE', 2009, ['PKE', 'FuncEnc', 'COED'], '/lwe/#small-secret-lwe', 'LWE', true);
assumption('LWR', 'Learning with Rounding', 2012, ['PKE'], '/lwr/', 'LWE');
assumption('LWAM', 'Learning with Alternating Moduli', 2025, ['Commitment'], '/lwam/', 'LWE'); // list of constructions is "PRF" right now, which doesn't really fit into any current category
assumption('LWPR', 'Learning with Physical Rounding', 2021, ['Commitment'], '/lwpr/', 'LWE'); // list of constructions is "PRF" right now, which doesn't really fit into any current category
assumptionFamily('LWR', ['LWR', 'LWPR'], 75);

assumption('Generalised-LWE', 'Generalised-LWE', 2019, ['PKE'], '/generalised-lwe/', 'LWE');
assumption('Order-LWE', 'Order-LWE', 2018, ['PKE'], '/generalised-lwe/#order-lwe', 'LWE', true);

assumption('Non-Uniform-LWE', 'Non-Uniform (Matrix) LWE', 2013, ['PKE', 'FuncEnc'], '/non-uniform-lwe/#binary-matrix-lwe', 'LWE'); // also constructs a PRF
assumption('Binary-Matrix-LWE', 'Binary-Matrix LWE', 2013, ['PKE', 'FuncEnc'], '/non-uniform-lwe/#binary-matrix-lwe', 'LWE', true);
assumption('LWE-with-low-norm', 'LWE with low norm', 2013, ['PKE', 'FuncEnc'], '/non-uniform-lwe/#lwe-with-low-norm', 'LWE', true);
assumption('Subspace-LWE', 'Subspace LWE', 2012, ['PKE', 'FuncEnc'], '/non-uniform-lwe/#subspace-lwe', 'LWE', true);
assumptionFamily('Non-Uniform-LWE', ['Non-Uniform-LWE', 'Binary-Matrix-LWE', 'LWE-with-low-norm', 'Subspace-LWE']);

assumption('Augmented-LWE', 'Augmented LWE', 2015, ['PKE', 'EffEnhEnc'], '/augmented-lwe/', 'LWE');

assumption('Binary-Secret-LWE', 'Binary-Secret LWE', 2018, ['PKE'], '/binary-secret-lwe/', 'LWE');

assumption('Known-Norm-LWE', 'Known-Norm LWE', 2024, ['PKE', 'ThresholdEnc'], '/known-norm-lwe/', 'LWE');
assumption('Known-Covariance-RLWE', 'Known-Covariance Ring-LWE', 2024, ['PKE', 'ThresholdEnc'], '/known-norm-lwe/#known-covariance-rlwe', 'LWE', true);

assumption('Reused-A-LWE', 'Reused-A LWE', 2024, ['PKE', 'ThresholdEnc'], '/reused-a-lwe/', 'LWE');

assumption('Yet-Another-LWE', 'Yet-Another LWE', 2024, ['ThresholdEnc', 'COED'], '/yet-another-lwe/', 'LWE');
assumption('Yet-Another^2-LWE', 'Yet-Another^2 LWE', 2024, ['ThresholdEnc', 'COED'], '/yet-another-lwe/#yet-another2-lwe', 'LWE', true);
assumptionFamily('Yet-Another-LWE', ['Yet-Another-LWE', 'Yet-Another^2-LWE']);

assumption('LW2E', 'Learning with Two Errors', 2025, ['PKE'], '/lw2e/', 'LWE');
assumption('LWSSE', 'Learning with Short and Sparse Errors', 2025, ['PKE'], '/lwsse/', 'LWE');

assumption('FMS-LWE', 'Fixed-Matrix Shifted LWE', 2024, ['PKE', 'ThresholdEnc'], '/fms-lwe/', 'LWE');

assumption('Continuous-LWE', 'Continuous LWE', 2021, ['PKE'], '/continuous-lwe/', 'LWE');
assumption('Hom-Continuous-LWE', 'Homogeneous Continuous LWE', 2021, ['PKE'], '/continuous-lwe/#hclwe', 'LWE', true);
assumptionFamily('Continuous-LWE', ['Continuous-LWE', 'Hom-Continuous-LWE']);

assumption('Variety-LWE', 'Variety LWE', 2025, ['COED'], '/variety-lwe/', 'LWE');

assumption('k-LWE', 'k-LWE', 2014, ['PKE'], '/klwe/', 'LWE');

assumption('Asymmetric-LWE', 'Asymmetric LWE', 2020, ['Sign', 'PKE'], '/asymmetric-lwe/', 'LWE');

assumption('Truncated-LWE', 'Truncated LWE', 2025, ['PKE'], '/truncated-lwe/', 'LWE');

assumption('qLWE', 'qLWE', 2025, ['PKE'], '/qlwe/', 'LWE'); // list of constructions is empty unless one counts constructions from LWE

assumption('FAE-LWE', 'First-are-errorless LWE', 2013, ['COED'], '/first-are-errorless-lwe/', 'LWE');

assumption('Extended-LWE', 'Extended LWE', 2011, ['ZK', 'PKE', 'FuncEnc'], '/extended-lwe/', 'LWE');
assumption('MH-Ext-LWE', 'Multi-Hint Extended LWE', 2016, ['ZK', 'PKE', 'FuncEnc'], '/extended-lwe/#multi-hint-extended-lwe', 'LWE', true);
assumptionFamily('Extended-LWE', ['Extended-LWE', 'MH-Ext-LWE']);

assumption('elLWE', 'LWE with Error-Leakage', 2023, ['FuncEnc'], '/ellwe/', 'LWE');
assumption('Hint-LWE', 'Hint Learning with Errors', 2022, ['Commitment', 'ZK', 'Sign', 'TresholdSign'], '/hint-lwe/', 'LWE');
assumption('Coset-Hint-LWE', 'Coset Hint Learning with Errors', 2025, ['TresholdEnc'], '/hint-lwe/#coset-hint-mlwe', 'LWE', true);
assumption('Leaky-LWE', 'Leaky Learning with Errors', 2023, ['FuncEnc', 'TresholdEnc'], '/leaky-lwe/', 'LWE');
assumptionFamily('LeakyLWE', ['Leaky-LWE', 'Hint-MLWE','Coset-Hint-LWE', 'elLWE']);

assumption('Decomposed-LWE', 'Decomposed-LWE', 2025, ['FuncEnc', 'EffEnhEnc','TresholdEnc'], '/decomposed-lwe/', 'LWE');
assumption('ssE-Decomposed-LWE', 'Small-Secret Extended Decomposed-LWE', 2025, ['FuncEnc', 'EffEnhEnc','TresholdEnc'], '/decomposed-lwe/#sse-decomposed-lwe', 'LWE', true);
assumption('ssC-Decomposed-LWE', 'Small-Secret Circular Decomposed-LWE', 2025, ['FuncEnc', 'EffEnhEnc','TresholdEnc'], '/decomposed-lwe/#ssc-decomposed-lwe', 'LWE', true);
assumptionFamily('Decomposed-LWE', ['Decomposed-LWE', 'ssE-Decomposed-LWE', 'ssC-Decomposed-LWE']);

assumption('AOM-MLWE', 'Algebraic One-More Module-LWE', 2025, ['TresholdSign'], '/aom-mlwe/', 'LWE');
assumption('SAOM-MLWE', 'Selective Algebraic One-More Module-LWE', 2025, ['TresholdSign'], '/aom-mlwe/#saom-mlwe', 'LWE', true);
assumption('AOM-UMLWE', 'Algebraic One-More Uniform-Module-LWE', 2025, ['TresholdSign'], '/aom-mlwe/#aom-umlwe', 'LWE', true);
assumption('SAOM-UMLWE', 'Selective Algebraic One-More Uniform-Module-LWE', 2025, ['TresholdSign'], '/aom-mlwe/#variants', 'LWE', true);
assumptionFamily('AOM-MLWE', ['AOM-MLWE','AOM-UMLWE', 'SAOM-MLWE', 'SAOM-UMLWE']);

assumption('{0,1}-CRT-LWE', '{0,1}-CRT-LWE', 2025, ['COED'], '/01-crt-lwe/', 'LWE');
assumption('s{0,1}-CRT-LWE', 'Stronger {0,1}-CRT-LWE', 2025, ['COED'], '/01-crt-lwe/#scrt-lwe', 'LWE', true);
assumptionFamily('{0,1}-CRT-LWE', ['{0,1}-CRT-LWE', 's{0,1}-CRT-LWE']);

assumption('l-succinct-LWE', 'l-succinct LWE', 2024, ['FuncEnc', 'EffEnhEnc'], '/l-succinct-lwe/', 'LWE');

assumption('Adaptive-LWE', 'Adaptive LWE', 2018, ['FuncEnc'], '/adaptive-lwe/', 'LWE');

assumption('Sparse-Matrix-LWE', 'Sparse Matrix LWE', 2024, ['COED'], '/sparse-matrix-lwe/', 'LWE');
assumption('Hollow-LWE', 'Hollow LWE', 2025, ['PKE'], '/hollow-lwe/', 'LWE');

assumption('Circular-LWE', 'Circular (Small-Secret) LWE', 2023, ['FuncEnc'], '/circular-lwe/', 'LWE');
assumption('CRO', 'Circular LWE with Random Openings', 2025, ['FuncEnc', 'PrivEnhEnc'], '/circular-lwe/#cro', 'LWE', true);

assumption('LWE-OD', 'Learning with Errors with Output Dependencies', 2026, ['PKE'], '/lwe-od/', 'LWE'); // list of constructions is empty unless one counts constructions from LWE and LWR

assumption('Tensor-LWE', 'Tensor LWE', 2022, ['FuncEnc', 'EffEnhEnc'], '/tensor-lwe/', 'LWE');
assumption('Strong-Tensor-LWE', 'Strong Tensor LWE', 2023, ['FuncEnc', 'EffEnhEnc'], '/tensor-lwe/#strong-tensor-lwe', 'LWE', true);
assumption('Circular-Tensor-LWE', 'Circular Tensor LWE', 2024, ['FuncEnc'], '/tensor-lwe/#circular-tensor-lwe', 'LWE', true);
assumptionFamily('Tensor-LWE', ['Tensor-LWE', 'Strong-Tensor-LWE', 'Circular-Tensor-LWE']);

assumption('SP-RLWE', 'Secret-Power Ring-LWE', 2026, ['PrivEnhEnc'], '/sp-rlwe/', 'LWE');
assumption('wSP-RLWE', 'Weak Secret-Power Ring-LWE', 2026, ['PrivEnhEnc'], '/sp-rlwe/#wsp-rlwe', 'LWE', true);
assumption('SSP-RLWE', 'Specialised Secret-Power Ring-LWE', 2025, ['PrivEnhEnc'], '/sp-rlwe/#ssp-rlwe', 'LWE', true);
assumption('SCSP-RLWE', 'Specialised Circular Secret-Power Ring-LWE', 2025, ['PrivEnhEnc'], '/sp-rlwe/#scsp-rlwe', 'LWE', true);
assumption('P-RLWE', 'Power Ring-LWE', 2024, ['PrivEnhEnc'], '/p-rlwe/', 'LWE');
assumptionFamily('Power-LWE', ['SP-RLWE', 'wSP-RLWE', 'SSP-RLWE', 'SCSP-RLWE', 'P-RLWE']);

assumption('PV-LWE', 'Partial Vandermonde LWE - closely related to Partial Fourier Recovery Problem', 2022, ['Sign', 'EffEnhSign', 'PKE'], '/pv-lwe/', 'LWE');
assumption('PNTT-PLWE', 'Partial-NTT Polynomial-LWE', 2022, ['Sign', 'EffEnhSign', 'PKE'], '/pv-lwe/#pntt-plwe', 'LWE', true);
assumption('Hybrid-PV-P', 'Hybrid between Partial Vandermonde LWE and Polynomial-LWE', 2022, ['Sign', 'EffEnhSign', 'PKE'], '/pv-lwe/#hybrid-pv-p', 'LWE', true);

assumption('Threshold-LWE', 'Threshold LWE', 2025, ['TresholdEnc'], '/threshold-lwe/', 'LWE');

assumption('Equivocal-LWE', 'Equivocal LWE', 2025, ['PrivEnhEnc', 'FuncEnc'], '/equivocal-lwe/', 'LWE');


// Standalone assumptions - family, i.e. last parameter is always 'Standalone'
assumption('NTRU', 'Number Theorists \'R\' Us or Number Theory Research Unit', 1996, ['Sign', 'PKE', 'COED'], '/ntru/', 'Standalone');
assumption('LIP', 'Lattice Isomorphism Problem', 2022, ['Sign', 'PKE', 'FuncEnc', 'COED'], '/lip/', 'Standalone'); /*First consideration in crypto-context*/
assumption('LPN', 'Learning Parity with Noise', 2000, ['Commitment', 'ZK'], '/lpn/', 'Standalone'); /*First consideration in crypto-context*/
assumption('LVP', 'Large Vector Problem', 2021, ['PKE'], '/lvp/', 'Standalone');
assumptionFamily('Standalone Problems', ['NTRU', 'LIP', 'LPN', 'LVP'], 100);



/*** Relations ***/

// Reductions - "reduces to"
//SIS
reducesTo('SIS', 'NFSIS');
reducesTo('SIS', 'ISIS');

reducesTo('SIS', 'ApproxSIS');

reducesTo('SIS', 'Asymmetric-SIS');

reducesTo('SIS', 'Split-SIS');
reducesTo('SIS', 'Extended-Split-SIS');

reducesTo('SIS', 't-M-ISIS');
reducesTo('SIS', 't-M-SPISIS');
reducesTo('OM-ISIS', 't-M-ISIS', 200);
reducesTo('OM-ISIS', 't-M-SPISIS', 200);

reducesTo('SIS', 'k-SIS');
reducesTo('k-M-ISIS', 'Twin-k-M-ISIS');

reducesTo('OM-ISIS', 'H-ISIS', 200);

reducesTo('ISISf', 'GenISISf');
reducesTo('ISISf', 'IntISISf');
reducesTo('GenISISf', 'IntGenISISf');

reducesTo('rOM-ISIS', 'OM-ISIS');

reducesTo('SIS', 'BASIS_rand');
reducesTo('BASIS_power', 'h-PRISIS');
reducesTo('k-M-ISIS', 'BASIS_struct');
reducesTo('BASIS_struct', 'l-succinct-SIS');

reducesTo('Decomposed-SIS', 'Extended-Decomposed-SIS', 300);

reducesTo('PV-SIS', 'PNTT-PSIS');
reducesTo('PNTT-PSIS', 'PNTT-PLWE');

reducesTo('ISSIS', 'LWSSE');
reducesTo('LWSSE', 'ISSIS');

// LWE
reducesTo('LWE', 'SIS', 1000);
reducesTo('ssLWE', 'LWE');
reducesTo('LWE', 'LWR');
reducesTo('LWE', 'LWAM');

reducesTo('LWE', 'Binary-Matrix-LWE', 200);
reducesTo('LWE', 'LWE-with-low-norm', 200);
reducesTo('LWE', 'Subspace-LWE', 200);
reducesTo('LWE', 'Non-Uniform-LWE', 250);

reducesTo('LWE', 'Augmented-LWE', 175);

reducesTo('LWE', 'Binary-Secret-LWE', 175);

reducesTo('LWE', 'Known-Norm-LWE', 200);
reducesTo('LWE', 'Known-Covariance-RLWE', 250);

reducesTo('LWE', 'Reused-A-LWE', 300);

reducesTo('Known-Norm-LWE', 'Yet-Another-LWE');
reducesTo('Reused-A-LWE', 'Yet-Another-LWE');

reducesTo('LPN', 'LW2E', 400);
reducesTo('LWE', 'LW2E', 300);
reducesTo('LWSSE', 'LPN', 300);
reducesTo('LWSSE', 'LWE', 400);

reducesTo('LWE', 'FMS-LWE', 225);

reducesTo('Binary-Secret-LWE', 'Continuous-LWE', 200);
reducesTo('Binary-Secret-LWE', 'Hom-Continuous-LWE', 225);

reducesTo('LWE', 'k-LWE');

reducesTo('LWE', 'Asymmetric-LWE');

reducesTo('Hint-LWE', 'Truncated-LWE');
reducesTo('NTRU', 'Truncated-LWE', 300);

reducesTo('LWE', 'qLWE');

reducesTo('LWE', 'FAE-LWE');
reducesTo('FAE-LWE', 'Extended-LWE');

reducesTo('LWE', 'Extended-LWE', 200);
reducesTo('LWE', 'MH-Ext-LWE', 200);

reducesTo('LWE', 'elLWE', 200);
reducesTo('LWE', 'Hint-LWE', 200);
reducesTo('Hint-LWE', 'Coset-Hint-LWE');

reducesTo('LWE','Leaky-LWE', 250);

reducesTo('LWE', '{0,1}-CRT-LWE', 225);

reducesTo('Evasive-LWE', 'l-succinct-LWE'); // to come

reducesTo('Decomposed-LWE', 'ssE-Decomposed-LWE');
reducesTo('Decomposed-LWE', 'Decomposed-SIS');

reducesTo('LWE', 'Hollow-LWE');

reducesTo('LWE', 'Sparse-Matrix-LWE');

reducesTo('AOM-UMLWE','AOM-MLWE');
reducesTo('AOM-MISIS','AOM-MLWE');
reducesTo('SIS','AOM-MISIS', 600);
reducesTo('LWE','AOM-MISIS', 600);
reducesTo('SIS', 'SAOM-UMLWE', 625);
reducesTo('LWE', 'SAOM-UMLWE', 625);

reducesTo('Circular-LWE', 'LWE', 400);
reducesTo('CRO', 'Circular-LWE');

reducesTo('SP-RLWE', 'wSP-RLWE');

reducesTo('PV-LWE', 'PV-SIS');
reducesTo('PNTT-PLWE', 'Hybrid-PV-P');

reducesTo('LWE', 'Threshold-LWE', 300);

// NTRU
reducesTo('NTRU', 'LWE', 500);

reducesTo('NTRU', 'PNTT-PSIS', 300);


// Partial Reductions - "partially reduces to"
// SIS
partiallyReducesTo('SIS', 'k-M-ISIS', 'k-R-ISIS is at least as hard as R-SIS with g*=1 when k<m or the system generated by G is invertible.', 300);

partiallyReducesTo('SIS', 'H-ISIS', 'Assuming the space-time hardness of SIS', 250);
partiallyReducesTo('SIS', 'H-SIGS', 'Assuming the space-time hardness of SIS');
partiallyReducesTo('H-SIGS', 'H-ISIS', 'Assuming the space-time hardness of SIS', 70);

partiallyReducesTo('SIS', 'SelfTargetMSIS', 'If H=RO');

partiallyReducesTo('SIS', 'GenISISf', 'f = RO or f = A_m * x + u', 300);
partiallyReducesTo('SIS', 'ISISf', 'f = RO', 300);

partiallyReducesTo('SIS', 'BASIS', 'SIS reduces to BASIS_rand and M-SIS to PRISIS for l=2', 250);
partiallyReducesTo('SIS', 'BASIS_power', 'M-SIS reduces to PRISIS for l=2', 300);
partiallyReducesTo('SIS', 'h-PRISIS', 'M-SIS reduces to h-PRISIS for l=2', 300);

partiallyReducesTo('Evasive-LWE', 'Evasive-SIS', 'Public-coin Evasive LWE (quantumly) heuristically reduces to Evasive SIS', 300); // to come

partiallyReducesTo('LWE', 'LWE-OD', 'Constraints detailed in Theorem 3 of the paper', 300);

partiallyReducesTo('LWE', 'Tensor-LWE', 'If all x_i are equal', 400);

// LWE
partiallyReducesTo('LWE', 'Truncated-LWE', 'For certain choices of parameters', 500);

partiallyReducesTo('LWE', 'l-succinct-LWE', 'If W is wide and embeds a trapdoor', 300);

partiallyReducesTo('LWE', 'Adaptive-LWE', 'If k is constant', 400);

partiallyReducesTo('l-succinct-LWE', 'Decomposed-LWE', 'For super-polynomial modulus to noise ratio');


// Generalisations - "generalised by"
//SIS
generalisedBy('ISISf', 'GenISISf');
generalisedBy('IntISISf', 'IntGenISISf');

generalisedBy('BASIS_rand', 'BASIS');
generalisedBy('BASIS_struct', 'BASIS');
generalisedBy('BASIS_power', 'BASIS');
generalisedBy('h-PRISIS', 'h-BASIS');
generalisedBy('BASIS', 'h-BASIS', 250);

// LWE
generalisedBy('Order-LWE', 'Generalised-LWE');
generalisedBy('LWE', 'Generalised-LWE', 300);
generalisedBy('MP-LWE', 'Generalised-LWE'); // to come

generalisedBy('Binary-Matrix-LWE', 'Non-Uniform-LWE');
generalisedBy('LWE-with-low-norm', 'Non-Uniform-LWE');
generalisedBy('Subspace-LWE', 'Non-Uniform-LWE');

generalisedBy('Known-Norm-LWE', 'Known-Covariance-RLWE');

generalisedBy('Reused-A-LWE', 'Hint-LWE', 175);

generalisedBy('Hint-LWE', 'Leaky-LWE');
generalisedBy('elLWE', 'Leaky-LWE');

generalisedBy('Tensor-LWE', 'Strong-Tensor-LWE');

// NTRU

// LIP

// LPN
generalisedBy('LPN', 'LWE', 500);
