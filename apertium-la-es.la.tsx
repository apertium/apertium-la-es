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
  </def-label> 
  <def-label name="PRGEN" closed="true">
    <tags-item lemma="causa" tags="pr"/>
    <tags-item lemma="ergo" tags="pr"/>
    <tags-item lemma="gratia" tags="pr"/>
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
