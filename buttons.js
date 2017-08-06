let buttonGridLeft = `
  <div class='row' id='row-1'>

    <div class='button' id='sqrt-button'>
      <div class='shifted-alt-function' id='A'>
        A
      </div>
      <div class='primary-function' id='sqrt'>
        $\\sqrt{x}$
      </div>
      <div class='alt-function' id='square'>
        $x^2$
      </div>
    </div>

    <div class='button' id='e-to-x-button'>
      <div class='shifted-alt-function' id='B'>
        B
      </div>
      <div class='primary-function' id='e-to-x'>
        $e^x$
      </div>
      <div class='alt-function' id='ln'>
        $\\ln$
      </div>
    </div>

    <div class='button' id='10-to-x-button'>
      <div class='shifted-alt-function' id='C'>
        C
      </div>
      <div class='primary-function' id='10-to-x'>
        $10^x$
      </div>
      <div class='alt-function' id='log'>
        $\\log$
      </div>
    </div>

    <div class='button' id='y-to-x-button'>
      <div class='shifted-alt-function' id='D'>
        D
      </div>
      <div class='primary-function' id='y-to-x'>
        $y^x$
      </div>
      <div class='alt-function' id='percent'>
        $%$
      </div>
    </div>

    <div class='button' id='reciprocal-button'>
      <div class='shifted-alt-function' id='E'>
        E
      </div>
      <div class='primary-function' id='reciprocal'>
        $1/x$
      </div>
      <div class='alt-function' id='delta-percent'>
        $\\delta %$
      </div>
    </div>

  </div>

  <div class='row' id='row-2'>

    <div class='button' id='sst-button'>
      <div class='shifted-alt-function' id='lbl'>
        LBL
      </div>
      <div class='primary-function' id='sst'>
        SST
      </div>
      <div class='alt-function' id='bst'>
        $BST$
      </div>
    </div>

    <div class='button' id='gto-button'>
      <div class='shifted-alt-function' id='hyp'>
        HYP
      </div>
      <div class='primary-function' id='gto'>
        GTO
      </div>
      <div class='alt-function' id='hyp-inverse'>
        $HYP^{-1}$
      </div>
    </div>

    <div class='button' id='sin-button'>
      <div class='shifted-alt-function' id='dim'>
        DIM
      </div>
      <div class='primary-function' id='sin'>
        $\\sin$
      </div>
      <div class='alt-function' id='arcsin'>
        $\\arcsin$
      </div>
    </div>

    <div class='button' id='cos-button'>
      <div class='shifted-alt-function' id='omega'>
        $\\omega$
      </div>
      <div class='primary-function' id='cos'>
        $\\cos$
      </div>
      <div class='alt-function' id='arccos'>
        $\\arccos$
      </div>
    </div>

    <div class='button' id='tan-button'>
      <div class='shifted-alt-function' id='I'>
        I
      </div>
      <div class='primary-function' id='tan'>
        $\\tan$
      </div>
      <div class='alt-function' id='arctan'>
        $\\arctan$
      </div>
    </div>

  </div>

  <div class='row' id='row-3'>

    <div class='button' id='rs-button'>
      <div class='shifted-alt-function' id='pse'>
        PSE
      </div>
      <div class='primary-function' id='rs'>
        R/S
      </div>
      <div class='alt-function' id='pr'>
        P/R
      </div>
    </div>

    <div class='button' id='gsb-button'>
      <div class='shifted-alt-function' id='sigma'>
        $\\sum$
      </div>
      <div class='primary-function' id='gsb'>
        GSB
      </div>
      <div class='alt-function' id='rtn'>
        RTN
      </div>
    </div>

    <div class='button' id='r-drop-button'>
      <div class='shifted-alt-function' id='prgm'>
        PRGM
      </div>
      <div class='primary-function' id='roll-stack-down'>
        R$\\downarrow$
      </div>
      <div class='alt-function' id='roll-stack-up'>
        R$\\uparrow$
      </div>
    </div>

    <div class='button' id='swap-x-y-button'>
      <div class='shifted-alt-function' id='reg'>
        REG
      </div>
      <div class='primary-function' id='swap-x-y'>
        X$\\leftrightarrow$Y
      </div>
      <div class='alt-function' id='rnd'>
        RND
      </div>
    </div>

    <div class='button' id='back-arrow-button'>
      <div class='shifted-alt-function' id='prefix'>
        PREFIX
      </div>
      <div class='primary-function' id='back-arrow'>
        $\\leftarrow$
      </div>
      <div class='alt-function' id='cl-x'>
        CL$x$
      </div>
    </div>

  </div>

  <div class='row' id='row-4'>

    <div class='button' id='on-button'>
      <div class='shifted-alt-function' id=''>

      </div>
      <div class='primary-function' id='on'>
        ON
      </div>
      <div class='alt-function' id=''>

      </div>
    </div>

    <div class='button' id='shift-alt-button'>
      <div class='shifted-alt-function' id=''>

      </div>
      <div class='primary-function' id='shift-alt'>
        f
      </div>
      <div class='alt-function' id=''>

      </div>
    </div>

    <div class='button' id='alt-button'>
      <div class='shifted-alt-function' id=''>

      </div>
      <div class='primary-function' id='alt'>
        g
      </div>
      <div class='alt-function' id=''>

      </div>
    </div>

    <div class='button' id='sto-button'>
      <div class='shifted-alt-function' id='frac'>
        FRAC
      </div>
      <div class='primary-function' id='sto'>
        STO
      </div>
      <div class='alt-function' id='int'>
        INT
      </div>
    </div>

    <div class='button' id='rcl-button'>
      <div class='shifted-alt-function' id='user'>
        USER
      </div>
      <div class='primary-function' id='rcl'>
        RCL
      </div>
      <div class='alt-function' id='mem'>
        MEM
      </div>
    </div>

  </div>

`

let buttonGridCenter = `
  <div class='row' id='row-1'>

    <div class='button' id='chs-button'>
      <div class='shifted-alt-function' id='matrix'>
        MATRIX
      </div>
      <div class='primary-function' id='chs'>
        CHS
      </div>
      <div class='alt-function' id='abs'>
        ABS
      </div>
    </div>

    <div class='button' id='eex-button'>
      <div class='shifted-alt-function' id='result'>
        RESULT
      </div>
      <div class='primary-function' id='eex'>
        EEX
      </div>
      <div class='alt-function' id='pi'>
        $\\pi$
      </div>
    </div>

    <div class='button' id='enter-button'>
      <div class='shifted-alt-function' id='ran-number'>
        RAN N
      </div>
      <div class='primary-function' id='enter'>
        ENTER
      </div>
      <div class='alt-function' id='lst-x'>
        LST$x$
      </div>
    </div>

  </div>
`

let buttonGridRight = `
  <div class='row' id='row-1'>

    <div class='button' id='seven-button'>
      <div class='shifted-alt-function' id='fix'>
        FIX
      </div>
      <div class='primary-function' id='seven'>
        7
      </div>
      <div class='alt-function' id='degrees'>
        DEG
      </div>
    </div>

    <div class='button' id='eight-button'>
      <div class='shifted-alt-function' id='sci'>
        SCI
      </div>
      <div class='primary-function' id='eight'>
        8
      </div>
      <div class='alt-function' id='radians'>
        RAD
      </div>
    </div>

    <div class='button' id='nine-button'>
      <div class='shifted-alt-function' id='eng'>
        ENG
      </div>
      <div class='primary-function' id='nine'>
        9
      </div>
      <div class='alt-function' id='gradians'>
        GRD
      </div>
    </div>

    <div class='button' id='divide-button'>
      <div class='shifted-alt-function' id='solve'>
        SOLVE
      </div>
      <div class='primary-function' id='divide'>
        /
      </div>
      <div class='alt-function' id='x-leq-y'>
        $x\\leq y$
      </div>
    </div>

  </div>

  <div class='row' id='row-2'>

    <div class='button' id='four-button'>
      <div class='shifted-alt-function' id=''>
        X?
      </div>
      <div class='primary-function' id='four'>
        4
      </div>
      <div class='alt-function' id='sf'>
        SF
      </div>
    </div>

    <div class='button' id='five-button'>
      <div class='shifted-alt-function' id='dse'>
        DSE
      </div>
      <div class='primary-function' id='five'>
        5
      </div>
      <div class='alt-function' id='cf'>
        CF
      </div>
    </div>

    <div class='button' id='six-button'>
      <div class='shifted-alt-function' id='isg'>
        ISG
      </div>
      <div class='primary-function' id='six'>
        6
      </div>
      <div class='alt-function' id='f-question'>
        F?
      </div>
    </div>

    <div class='button' id='multiply-button'>
      <div class='shifted-alt-function' id='num-integral'>
        $\\int_y^x$
      </div>
      <div class='primary-function' id='multiply'>
        X
      </div>
      <div class='alt-function' id='x-equals-zero'>
        $x=0$
      </div>
    </div>

  </div>

  <div class='row' id='row-3'>

    <div class='button' id='one-button'>
      <div class='shifted-alt-function' id=''>
        ? R
      </div>
      <div class='primary-function' id='one'>
        1
      </div>
      <div class='alt-function' id=''>
        $\\rightarrow P$
      </div>
    </div>

    <div class='button' id='two-button'>
      <div class='shifted-alt-function' id='to-hms'>
        ? H.MS
      </div>
      <div class='primary-function' id='two'>
        2
      </div>
      <div class='alt-function' id=''>
        $\\rightarrow H$
      </div>
    </div>

    <div class='button' id='three-button'>
      <div class='shifted-alt-function' id='to-radians'>
        ? RAD
      </div>
      <div class='primary-function' id='three'>
        3
      </div>
      <div class='alt-function' id='to-degrees'>
        $\\rightarrow DEG$
      </div>
    </div>

    <div class='button' id='subtract-button'>
      <div class='shifted-alt-function' id='swap-re-img'>
        Re ? Im
      </div>
      <div class='primary-function' id='subtract'>
        -
      </div>
      <div class='alt-function' id='test'>
        TEST
      </div>
    </div>

  </div>

  <div class='row' id='row-4'>

    <div class='button' id='zero-button'>
      <div class='shifted-alt-function' id='factorial'>
        $x!$
      </div>
      <div class='primary-function' id='zero'>
        0
      </div>
      <div class='alt-function' id='mean'>
        x-bar
      </div>
    </div>

    <div class='button' id='decimal-button'>
      <div class='shifted-alt-function' id=''>
        y-hat
      </div>
      <div class='primary-function' id='decimal'>
        .
      </div>
      <div class='alt-function' id='s'>
        S
      </div>
    </div>

    <div class='button' id='sum-plus-button'>
      <div class='shifted-alt-function' id='lr'>
        L.R.
      </div>
      <div class='primary-function' id='sum-plus'>
        $\\sum +$
      </div>
      <div class='alt-function' id='sum-minus'>
        $\\sum -$
      </div>
    </div>

    <div class='button' id='add-button'>
      <div class='shifted-alt-function' id='permutation'>
        P$y.x$
      </div>
      <div class='primary-function' id='add'>
        +
      </div>
      <div class='alt-function' id='combination'>
        C$y.x$
      </div>
    </div>

  </div>
`
