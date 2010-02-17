<?xml version="1.0" encoding="UTF-8"?>
<tagger name="latin">
<tagset>
  <def-label name="CNJCOO" closed="true">
    <tags-item tags="cnjcoo"/>
  </def-label> 
  <def-label name="CNJADV" closed="true">
    <tags-item tags="cnjadv"/>
  </def-label> 
  <def-label name="CNJSUB" closed="true">
    <tags-item tags="cnjsub"/>
  </def-label> 
  <def-label name="IJ">
    <tags-item tags="ij"/>
  </def-label> 
  <def-label name="ADV">
    <tags-item tags="adv"/>
    <tags-item tags="adv.sint"/>
    <tags-item tags="adv.sint.comp"/>
    <tags-item tags="adv.sint.sup"/>
  </def-label> 
  <def-label name="PR" closed="true">
    <tags-item tags="pr"/>
  </def-label> 
  <def-label name="PRABL" closed="true">
    <tags-item lemma="a" tags="pr"/>
    <tags-item lemma="ab" tags="pr"/>
    <tags-item lemma="absque" tags="pr"/>
    <tags-item lemma="clam" tags="pr"/>
    <tags-item lemma="coram" tags="pr"/>
    <tags-item lemma="cum" tags="pr"/>
    <tags-item lemma="de" tags="pr"/>
    <tags-item lemma="ex" tags="pr"/>
    <tags-item lemma="e" tags="pr"/>
    <tags-item lemma="palam" tags="pr"/>
    <tags-item lemma="prae" tags="pr"/>
    <tags-item lemma="praeter" tags="pr"/>
    <tags-item lemma="pro" tags="pr"/>
    <tags-item lemma="procul" tags="pr"/>
    <tags-item lemma="secundum" tags="pr"/>
    <tags-item lemma="sine" tags="pr"/>
    <tags-item lemma="super" tags="pr"/>
    <tags-item lemma="supra" tags="pr"/>
    <tags-item lemma="tenus" tags="pr"/>
    <tags-item lemma="trans" tags="pr"/>
    <tags-item lemma="ultra" tags="pr"/>
    <tags-item lemma="usque ad" tags="pr"/>
    <tags-item lemma="versus" tags="pr"/>
  </def-label> 
  <def-label name="PRACC" closed="true">
    <tags-item lemma="ad" tags="pr"/>
    <tags-item lemma="adversus" tags="pr"/>
    <tags-item lemma="ante" tags="pr"/>
    <tags-item lemma="apud" tags="pr"/>
    <tags-item lemma="circa" tags="pr"/>
    <tags-item lemma="circiter" tags="pr"/>
    <tags-item lemma="circum" tags="pr"/>
    <tags-item lemma="contra" tags="pr"/>
    <tags-item lemma="erga" tags="pr"/>
    <tags-item lemma="extra" tags="pr"/>
    <tags-item lemma="infra" tags="pr"/>
    <tags-item lemma="inter" tags="pr"/>
    <tags-item lemma="intra" tags="pr"/>
    <tags-item lemma="iuxta" tags="pr"/>
    <tags-item lemma="ob" tags="pr"/>
    <tags-item lemma="penes" tags="pr"/>
    <tags-item lemma="per" tags="pr"/>
    <tags-item lemma="pone" tags="pr"/>
    <tags-item lemma="post" tags="pr"/>
    <tags-item lemma="prope" tags="pr"/>
    <tags-item lemma="propter" tags="pr"/>
    <tags-item lemma="simul" tags="pr"/>
  </def-label> 
  <def-label name="PRGEN" closed="true">
    <tags-item lemma="causa" tags="pr"/>
    <tags-item lemma="ergo" tags="pr"/>
    <tags-item lemma="gratia" tags="pr"/>
  </def-label> 
  <def-label name="PRABLACC" closed="true">
    <tags-item lemma="sub" tags="pr"/> <!-- Can be either, same translation -->
    <tags-item lemma="subter" tags="pr"/> <!-- Can be either, same translation -->
  </def-label> 
  <def-label name="PRACCGEN" closed="true">
    <tags-item lemma="tenus" tags="pr"/> <!-- Can be either, same translation -->
  </def-label> 
  <def-label name="IRI" closed="true">
    <tags-item lemma="ire" tags="vblex.inf.psv"/>
  </def-label>
  <def-label name="PP" closed="true">
    <tags-item tags="vblex.pp.*"/>
    <tags-item tags="vbser.pp.*"/>
  </def-label>
  <def-label name="SUPINEACC">
    <tags-item tags="vblex.spn.acc"/>
  </def-label> 
  <def-label name="SUPINEDATABL">
    <tags-item tags="vblex.spn.dat"/>
  </def-label> 

</tagset>

<forbid>
  <label-sequence>
    <label-item label="PP"/>
    <label-item label="IRI"/>
  </label-sequence>
</forbid>

<enforce-rules>
</enforce-rules>

<preferences>
  <prefer tags="vblex.spn"/>
</preferences>
</tagger>
