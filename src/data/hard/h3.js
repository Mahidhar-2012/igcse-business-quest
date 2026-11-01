import { mc, multi, match, cloze, short, ao } from '../builders.js';

// Unit 3 (Marketing): harder replacements and extra question types.
// Every option is written to the same length and shape, so the answer cannot be spotted by its form.

export const h3 = {
  replace: {
    // ---------- The market ----------
    'u3-market:1': ao(3, mc('A firm sells $10m in a market worth $50m. The market grows to $60m and the firm’s sales stay at $10m. What has happened to its market share?', [
      ['It has fallen from 20% to about 16.7%, even though sales did not fall', 'Correct: 10 ÷ 60 = 16.7%, against 10 ÷ 50 = 20%.'],
      ['It has stayed at 20%, because the firm’s sales did not change at all', 'Share depends on the size of the whole market as well.'],
      ['It has risen to 24%, because the market is now larger than before', 'A larger market with fixed sales lowers share.'],
      ['It has fallen to about 6%, because $10m is a small part of $60m', 'Arithmetic error: it is 10 ÷ 60.'],
    ], 0)),
    'u3-market:2': ao(4, mc('A firm making left-handed musical instruments is thinking of selling a mass-market product. Which risk is most important?', [
      ['It may lose its specialist reputation and meet much stronger competitors', 'Correct: niche strengths may be lost.'],
      ['It will have to cut its prices to zero, because mass markets are free', 'Not true; prices are set by the firm and the market.'],
      ['It will be unable to sell any products, because left-handed customers leave', 'Overstated; some may stay.'],
      ['It will have to stop paying tax, because mass-market sales are exempt', 'Not true.'],
    ], 0)),
    'u3-market:4': ao(3, mc('A supermarket splits its customers by income and by area. Which result is most logical?', [
      ['Different product ranges and prices in each store to suit local customers', 'Correct: market segmentation in action.'],
      ['Identical ranges and prices in every store to keep costs as low as possible', 'That ignores the segments.'],
      ['One national advertising slogan for the whole company and no local choices', 'That is mass marketing.'],
      ['A single type of customer buying the same products in every location', 'Segmentation recognises differences.'],
    ], 0)),
    'u3-market:5': ao(3, mc('Which is the best example of anticipating customer needs?', [
      ['A food company launching vegan products before demand reaches its peak', 'Correct: acts ahead of the change.'],
      ['A food company cutting prices after rivals have already sold all stocks', 'Reacting to competitors, not anticipating.'],
      ['A food company copying its rival’s best-selling item a year after launch', 'Following, not anticipating.'],
      ['A food company advertising its oldest product more heavily than before', 'Not related to new needs.'],
    ], 0)),
    'u3-market:7': ao(3, mc('A firm sells only to the niche market of professional divers. What is its biggest risk?', [
      ['The total market is small, which limits how far sales can grow', 'Correct: niche markets are limited.'],
      ['The firm faces very large numbers of competitors in a crowded market', 'Niche markets usually have few.'],
      ['The firm cannot charge higher prices because customers know the costs', 'Niche firms often can charge more.'],
      ['The firm is unable to build loyalty because divers change often', 'Niche customers are often loyal.'],
    ], 0)),
    'u3-market:c0.0': ao(3, mc('A toy shop notices customers asking for eco-friendly toys and orders them before rivals do. What does this show?', [
      ['Anticipating and meeting changing customer needs ahead of competitors', 'Correct.'],
      ['Reacting to a fall in sales after rivals had already taken customers', 'The shop acted first.'],
      ['Cutting costs by buying cheaper stock than the shops nearby sell', 'Not about cost.'],
      ['Entering a niche market that has no customers who want toys', 'Customers already asked for the toys.'],
    ], 0)),
    'u3-market:c1.0': ao(4, mc('A town’s population is ageing and a budget supermarket opens nearby. What is the most likely consequence for a local grocer?', [
      ['Spending patterns shift to different products and prices, so its range may need to change', 'Correct.'],
      ['Demand stays exactly the same, because customers rarely change shops', 'Market changes affect demand.'],
      ['The grocer’s costs fall, because rivals will pay some of its expenses', 'Not logical.'],
      ['The grocer can raise prices safely, because older customers dislike discounts', 'Unlikely.'],
    ], 0)),
    'u3-market:c4.0': ao(4, mc('A watch brand sells 5,000 watches a year at $4,000 to rich customers; a mass brand sells 500,000 at $40. Which comparison is best?', [
      ['The luxury brand has a higher margin and less competition, but a small customer base', 'Correct.'],
      ['The luxury brand will always earn the larger total profit, since prices are higher', 'Total revenue: $20m vs $20m before costs.'],
      ['The mass brand has the smaller customer base, since its prices are lower', 'It has the larger base.'],
      ['The luxury brand faces more competitors, because rich customers shop around', 'It faces fewer.'],
    ], 0)),
    'u3-market:c5.0': ao(3, mc('A gym offers a half-price student membership, a daytime senior membership and a 24-hour executive membership. Which idea and trade-off fit best?', [
      ['Market segmentation, which meets different needs but adds cost and complexity', 'Correct.'],
      ['Mass marketing, which reaches everyone but ignores different customers’ needs', 'It offers different products to groups.'],
      ['Price skimming, which earns high profit early but loses customers later', 'Not described.'],
      ['Penetration pricing, which wins share quickly but needs prices to rise', 'Not described.'],
    ], 0)),
    'u3-market:c7.0': ao(4, mc('A clothes retailer runs different campaigns for teenagers and for older women. What is the most significant drawback?', [
      ['Separate campaigns and ranges raise marketing and production costs', 'Correct.'],
      ['Customers become unable to tell which of the two groups it prefers', 'Not a drawback.'],
      ['The firm can no longer measure which of its campaigns is working', 'It can.'],
      ['The firm is forced to sell the same clothing at the same price to all', 'The opposite of segmentation.'],
    ], 0)),

    // ---------- Market research ----------
    'u3-research:1': ao(3, mc('Which method gives the most reliable evidence about how shoppers actually move around a store layout?', [
      ['Observation of shoppers’ movements, because it records what they really do', 'Correct.'],
      ['A postal survey of past customers, because it reaches people at home', 'Reports what people say they do.'],
      ['A focus group of ten staff, because they know where the products are', 'Staff are not typical shoppers.'],
      ['A published report on the whole retail sector, because it is up to date', 'Secondary data on a different question.'],
    ], 0)),
    'u3-research:2': ao(4, mc('A firm sets the price of a new product using a five-year-old market report. What is the biggest risk?', [
      ['The data may be out of date, so it may not reflect customers’ views today', 'Correct.'],
      ['The report will be too detailed, so it is impossible to read at all', 'Not the main risk.'],
      ['The report will have been paid for twice, because the firm has used it before', 'Not the main risk.'],
      ['The report will favour the firm’s rivals, because they can also read it', 'Not the main risk.'],
    ], 0)),
    'u3-research:5': ao(4, mc('Which research plan is best for a firm choosing where to open a new shop?', [
      ['Secondary population and income data, then observation of footfall at the sites', 'Correct: cheap broad data followed by targeted primary research.'],
      ['A single interview with the owner of the nearest rival shop in the town', 'Too narrow and biased.'],
      ['A national survey of everyone who has ever bought from the firm online', 'Not about shop locations.'],
      ['A focus group of the firm’s own managers about their favourite sites', 'Biased.'],
    ], 0)),
    'u3-research:6': ao(3, mc('A questionnaire has many open questions and the results are slow to analyse. What is the best change?', [
      ['Use more closed questions with fixed options, which are quicker to analyse', 'Correct.'],
      ['Ask only open questions with longer answer boxes for more detail', 'This would make it slower.'],
      ['Send the questionnaire to fewer people, to leave out the awkward answers', 'This weakens reliability.'],
      ['Change to observation only, because questionnaires cannot be analysed', 'They can be.'],
    ], 0)),
    'u3-research:c0.0': ao(4, mc('A company plans a $500,000 snack launch. Which statement best justifies spending $20,000 on market research first?', [
      ['The research cost is small compared with the possible loss if the product fails', 'Correct.'],
      ['Research guarantees that every new product will be a success in the market', 'No guarantee.'],
      ['Research is a legal requirement before any product can be sold in shops', 'Not required.'],
      ['Research is cheaper than launching, so the launch can be skipped entirely', 'Not logical.'],
    ], 0)),
    'u3-research:c1.0': ao(4, mc('A café wants to know why customers prefer a rival. Which primary method is best justified?', [
      ['A focus group, because it explores reasons and feelings in depth', 'Correct.'],
      ['A published industry report, because it is quick and costs nothing', 'Secondary, and not specific.'],
      ['A count of the rival’s customers, because it shows how many go there', 'Shows how many, not why.'],
      ['A review of last year’s own sales, because it covers every customer', 'Does not explain preferences.'],
    ], 0)),
    'u3-research:c2.0': ao(4, mc('A researcher asks 30 people at a city-centre gym about healthy snacks and concludes that most people want them. What is the main weakness?', [
      ['The sample is small and not representative of all consumers', 'Correct.'],
      ['The questions were closed, so the answers are impossible to analyse', 'Not the issue.'],
      ['The researcher used primary research, which is never reliable', 'Primary research can be reliable.'],
      ['The result is too high to be believed, as most people dislike snacks', 'Not supported.'],
    ], 0)),
    'u3-research:c3.0': ao(4, mc('A start-up with $300 must estimate demand for a new app. Which choice is best justified?', [
      ['Secondary research on competitors, plus a short free online survey', 'Correct: cheap and useful.'],
      ['A $5,000 survey by a specialist agency, as the findings are most reliable', 'Unaffordable.'],
      ['A guess based on the founder’s own opinion, because it saves all costs', 'Unreliable.'],
      ['A national poster campaign, as people will then tell the firm what they want', 'Unaffordable and not research.'],
    ], 0)),
    'u3-research:c4.0': ao(3, mc('A survey asks: “Do you agree our excellent customer service is outstanding?” What is the problem?', [
      ['It is a leading question that pushes people towards one answer', 'Correct: biased.'],
      ['It is a closed question, which can never be used in a survey', 'Closed questions are fine.'],
      ['It is too long, so the respondent will be unable to read it', 'Length is not the issue.'],
      ['It asks about price, which respondents are unwilling to discuss', 'It does not.'],
    ], 0)),
    'u3-research:c6.0': ao(4, mc('A chain interviewed 40 people, found most preferred cold brew, and stocked 20,000 bottles that did not sell. What is the best analysis?', [
      ['A small sample and possible bias made the demand evidence unreliable', 'Correct.'],
      ['Cold brew is never popular, so no research could have shown otherwise', 'Unsupported.'],
      ['The firm used too many bottles, so the research should have been cut', 'The issue is the evidence.'],
      ['Secondary research is always more accurate than a sample of 40', 'Not always.'],
    ], 0)),

    // ---------- Product and price ----------
    'u3-product-price:2': ao(3, mc('Which statement about the product life cycle is best supported?', [
      ['Extension strategies aim to lift or prolong sales before they decline', 'Correct.'],
      ['Every product moves through the stages at the same speed and in the same way', 'Not true.'],
      ['Growth is the stage in which sales and profit are lowest for most products', 'Introduction is.'],
      ['A product in decline can never be improved or relaunched', 'Extension strategies exist.'],
    ], 0)),
    'u3-product-price:3': ao(4, mc('A luxury perfume brand starts selling at big discounts in supermarkets. What is the most likely risk?', [
      ['Damage to its prestige image, which weakens its ability to charge high prices', 'Correct.'],
      ['A fall in costs, since supermarkets pay for all of the brand’s advertising', 'Not logical.'],
      ['A rise in loyalty from existing customers, who value the new low prices', 'Likely the opposite.'],
      ['A ban on selling in any shop, because supermarkets cannot sell perfume', 'No such rule.'],
    ], 0)),
    'u3-product-price:6': ao(3, mc('Which packaging change most directly supports a premium brand image?', [
      ['High-quality materials and an elegant, distinctive design', 'Correct.'],
      ['Thinner plastic and plainer printing to cut the cost of each pack', 'Cheaper, not premium.'],
      ['Larger warning labels covering most of the front of the box', 'Not premium.'],
      ['Printing a discount offer on the front of every pack on sale', 'Cheapens the image.'],
    ], 0)),
    'u3-product-price:7': ao(4, mc('Research shows a product is liked but is too expensive for most customers. Which response is best supported?', [
      ['Test a cheaper version or lower price, since price is the main barrier', 'Correct.'],
      ['Raise the price further, as it will make the product seem more exclusive', 'Would worsen the problem.'],
      ['Stop selling it, because customers who like it do not need it', 'Not logical.'],
      ['Spend more on advertising only, as customers will then pay the price', 'Does not address price.'],
    ], 0)),
    'u3-product-price:c0.0': ao(4, mc('A plain bottle of water sells at $1; a premium-brand bottle of identical water sells at $2.50. What does this show?', [
      ['Brand image lets a firm charge more and builds loyalty, though it costs to maintain', 'Correct.'],
      ['The premium water must contain more minerals, since customers pay more for it', 'Identical water.'],
      ['The plain water will always be more profitable, since its costs are lower', 'Not supported.'],
      ['The price has no effect on demand, as customers do not compare prices', 'Not supported.'],
    ], 0)),
    'u3-product-price:c1.0': ao(4, mc('A chocolate firm switches to recyclable packaging. Which reason is best justified?', [
      ['It may improve its reputation with eco-conscious customers, though costs may rise', 'Correct.'],
      ['It will cut costs immediately, since recyclable materials are always cheaper', 'Not always.'],
      ['It is a legal requirement for all chocolate sold by any firm in the world', 'Not universal.'],
      ['It will stop competitors from selling chocolate in recyclable packaging', 'No.'],
    ], 0)),
    'u3-product-price:c2.0': ao(4, mc('A drinks company spends $2m developing a new product, and one in three new products fails. Which statement is best justified?', [
      ['New products help growth but are costly and risky, so research is worth doing first', 'Correct.'],
      ['New products are certain to earn back their costs, so risk can be ignored', 'No certainty.'],
      ['The firm should never develop a new product, since many fail in markets', 'Too extreme.'],
      ['Development cost is irrelevant, because the firm will recover it through tax', 'Not true.'],
    ], 0)),
    'u3-product-price:c3.0': ao(3, mc('A phone sold 5k, 40k, 120k, 125k and 110k in years 1 to 5. Which stage is it entering in year 5?', [
      ['Decline is beginning, since sales have started to fall after levelling off', 'Correct.'],
      ['Introduction, since sales are lower than they were in the previous year', 'Introduction was year 1.'],
      ['Growth, since the total number of phones sold is still very high', 'Growth is when sales rise rapidly.'],
      ['Extension, since the firm has launched a new version of the phone', 'Not stated.'],
    ], 0)),
    'u3-product-price:c4.0': ao(4, mc('Sales rise slowly, then rapidly, then level off. The firm is thinking of heavy advertising. At which stage is it most justified?', [
      ['Maturity or early decline, to prolong sales before they fall away', 'Correct.'],
      ['Introduction only, because customers know about the product from birth', 'Not logical.'],
      ['Growth, because sales are already rising rapidly without any help', 'Less needed.'],
      ['Never, because advertising has no effect on a product’s sales', 'It can prolong sales.'],
    ], 0)),
    'u3-product-price:c6.0': ao(4, mc('A cough sweet sells less each year at home, but people abroad like its taste and no rival sells it there. Which extension strategy fits?', [
      ['Enter the overseas market, which gives a new set of customers with little rivalry', 'Correct.'],
      ['Cut the quality, because home customers have clearly stopped caring', 'Not logical.'],
      ['Stop selling abroad, because exports are always riskier than home sales', 'Opportunity ignored.'],
      ['Raise the home price, because falling sales show that demand is high', 'Not logical.'],
    ], 0)),
    'u3-product-price:c7.0': ao(4, mc('A firm launches a unique gadget with no rivals. Which pricing strategy is best justified?', [
      ['Price skimming, because a unique product can earn high profit early from keen buyers', 'Correct.'],
      ['Penetration pricing, because rivals do not exist and a low price is needed', 'No rivals, so no need.'],
      ['Cost-plus with no mark-up, because the firm should aim to just break even', 'Ignores demand.'],
      ['Loss leader pricing, because the firm should sell every unit at a loss', 'Not sensible.'],
    ], 0)),
    'u3-product-price:c9.0': ao(4, mc('A toy firm has launched no new product for five years while rivals launch new toys every year. What is the most likely outcome?', [
      ['Sales decline as customers move to rivals’ newer products', 'Correct.'],
      ['Sales rise, since customers value products that have not changed at all', 'Unlikely.'],
      ['Sales are unaffected, since rivals’ products are never as good', 'Not supported.'],
      ['Costs rise sharply, because old products need more raw materials', 'Not the point.'],
    ], 0)),
    'u3-product-price:c10.0': ao(4, mc('A firm spends $100,000 on a new-use version of an old product and expects $400,000 extra sales over three years. Which evaluation is best?', [
      ['It looks worthwhile if the sales forecast is reliable and costs are controlled', 'Correct.'],
      ['It is certain to make a profit, since forecasts are always accurate', 'Not certain.'],
      ['It cannot be worthwhile, since sales are lower than the total cost', 'Compare sales with all costs, not only this cost.'],
      ['It is irrelevant, because extension strategies never raise sales', 'They can.'],
    ], 0)),
    'u3-product-price:c11.0': ao(4, mc('A company uses penetration pricing for six months, then raises prices. What is the main risk?', [
      ['Customers may leave when prices rise, losing the share the firm had won', 'Correct.'],
      ['Customers will pay far more than before, which cuts the firm’s profit', 'Not logical.'],
      ['Competitors will be forced to leave the market straight away', 'Not logical.'],
      ['Production costs will fall, because the higher price cancels them out', 'Not logical.'],
    ], 0)),
    'u3-product-price:c12.0': ao(3, mc('An airline raises fares when flights are nearly full and cuts them when they are empty. Which method is this?', [
      ['Dynamic pricing, which raises revenue by matching price to demand', 'Correct.'],
      ['Cost-plus pricing, which adds a fixed mark-up to the cost of each seat', 'Fixed mark-up.'],
      ['Penetration pricing, which sets low prices to take share from rivals', 'Not shown.'],
      ['Price skimming, which sets high prices when a product is first launched', 'Not shown.'],
    ], 0)),

    // ---------- Place and promotion ----------
    'u3-place-promotion:1': ao(3, mc('A firm sells through agents who earn commission. Which statement is most accurate?', [
      ['Agents use local contacts and are paid only when they sell, but they cut the firm’s margin', 'Correct.'],
      ['Agents are paid a fixed wage whatever they sell, so the firm’s costs never change', 'Commission varies with sales.'],
      ['Agents own the stock they sell, so the firm has no further cost at all', 'They sell for the firm.'],
      ['Agents set the prices the firm must follow, so the firm loses all control', 'Not true.'],
    ], 0)),
    'u3-place-promotion:2': ao(4, mc('A producer sells at $5 to a wholesaler, who sells at $6.50 to a retailer, who sells to customers at $9. What does this show about long chains?', [
      ['Each stage adds a margin, so the final price is higher than with a shorter chain', 'Correct.'],
      ['Each stage cuts the price, so customers always pay less for goods in long chains', 'Margins are added, not removed.'],
      ['Each stage has the same margin, so the chain length has no effect on price', 'Margins differ.'],
      ['Each stage cuts the producer’s costs, so the producer earns a larger profit', 'Not shown.'],
    ], 0)),
    'u3-place-promotion:6': ao(4, mc('Which statement best evaluates a loyalty scheme for a supermarket with many rivals nearby?', [
      ['It can raise repeat purchases and gather data, but rivals can copy it easily', 'Correct.'],
      ['It guarantees that every customer will shop only at the one supermarket', 'No guarantee.'],
      ['It has no cost to the supermarket, since points are paid by the customers', 'Costs the firm.'],
      ['It is useful only for firms that have no rivals at all in the market', 'Rivals make it more useful.'],
    ], 0)),
    'u3-place-promotion:7': ao(2, mc('Which is the clearest example of informative advertising?', [
      ['An advert explaining the features and price of a new phone', 'Correct.'],
      ['An advert repeating a famous brand’s slogan to remind existing buyers', 'Reminding.'],
      ['An advert showing celebrities enjoying life while using a product', 'Persuasive.'],
      ['An advert offering a free gift to those who buy before Friday', 'Promotion/incentive.'],
    ], 0)),
    'u3-place-promotion:c2.0': ao(2, mc('A company wants to remind customers of a well-known brand, not tell them about a new product. Which promotional aim is this?', [
      ['Reminding, to keep the brand in customers’ minds', 'Correct.'],
      ['Informing, to explain the features of a new product', 'There is no new product.'],
      ['Persuading, to change the mind of people who dislike it', 'Not shown.'],
      ['Launching, to build awareness of an unknown product', 'The brand is well known.'],
    ], 0)),
    'u3-place-promotion:c3.0': ao(4, mc('A café gives a free coffee after nine purchases. Which statement best evaluates the scheme?', [
      ['It encourages repeat visits and gives customer data, but the free coffee costs money', 'Correct.'],
      ['It guarantees profit because every customer buys exactly nine coffees', 'No guarantee.'],
      ['It cannot affect sales, since customers never respond to free offers', 'It can.'],
      ['It reduces the cost of coffee, since the beans are given by customers', 'Not logical.'],
    ], 0)),
    'u3-place-promotion:c4.0': ao(4, mc('A firm with $500 must reach students at a nearby university. Which advertising is best justified?', [
      ['Social media posts and posters on campus, which are cheap and well targeted', 'Correct.'],
      ['A national television advert, which reaches many people at one time', 'Unaffordable.'],
      ['A full-page advert in a national newspaper, as it looks professional', 'Unaffordable and untargeted.'],
      ['A billboard on a major road far from the university', 'Poorly targeted and costly.'],
    ], 0)),
    'u3-place-promotion:c6.0': ao(4, mc('A boutique sells only in its shop. A friend suggests also selling online. What is the best-justified benefit and cost?', [
      ['A wider market and longer opening hours, but website and delivery costs', 'Correct.'],
      ['A smaller market and shorter hours, but lower website costs', 'Opposite.'],
      ['Guaranteed higher profit, but a loss of all local customers', 'No guarantee.'],
      ['No change to sales, since online customers are the same as local ones', 'Not true.'],
    ], 0)),
    'u3-place-promotion:c7.0': ao(4, mc('A producer sells direct online and handles delivery itself, but delivery costs are cutting its margin. Which statement is best?', [
      ['Direct selling keeps the middleman’s profit, but the firm takes on delivery costs and risk', 'Correct.'],
      ['Direct selling removes all costs, because customers pay for delivery fully', 'Not true.'],
      ['Direct selling is always more expensive than selling through a retailer', 'Not always.'],
      ['Direct selling makes the firm’s brand less well known to customers', 'Not necessarily.'],
    ], 0)),
    'u3-place-promotion:c8.0': ao(4, mc('A bakery offers 50% off in January, sales jump, then return to normal in February. Which analysis is best?', [
      ['The discount gave a short-term boost but did not build lasting loyalty', 'Correct.'],
      ['The discount has permanently raised demand, since sales jumped sharply', 'They returned to normal.'],
      ['The discount failed because sales did not change at any time in January', 'They jumped.'],
      ['The discount cut costs, because customers paid less for each item', 'Revenue per item fell.'],
    ], 0)),
    'u3-place-promotion:c9.0': ao(3, mc('Which is the strongest drawback of billboards for a small local café?', [
      ['High cost and poor targeting of local customers', 'Correct.'],
      ['Low visibility, since nobody reads billboards by a road', 'Visibility is high.'],
      ['Short life, since billboards disappear after a single day', 'They last weeks.'],
      ['Unreliability, since billboard owners often fail to put adverts up', 'Not the main drawback.'],
    ], 0)),
    'u3-place-promotion:c10.0': ao(3, mc('A customer wants to buy a sofa online but is unsure about colour and size. Which is the most significant e-commerce disadvantage?', [
      ['They cannot see or test the product in person before buying', 'Correct.'],
      ['They cannot compare prices with other websites before buying', 'They can compare easily.'],
      ['They cannot pay by card for goods bought on websites', 'They can.'],
      ['They cannot buy at night, because websites are closed then', 'Websites are open 24 hours.'],
    ], 0)),

    // ---------- Marketing strategy and the law ----------
    'u3-strategy-legal:1': ao(3, mc('A firm sells baby food with a label that leaves out an allergy warning. Which statement is most accurate?', [
      ['It may break consumer-protection law and face fines, recalls and lost trust', 'Correct.'],
      ['It is allowed, since allergy warnings are optional on baby food labels', 'Required by law.'],
      ['It is only a problem if a customer complains in writing to the firm', 'The law applies anyway.'],
      ['It affects only the firm’s costs, not its reputation or customers', 'Reputation suffers.'],
    ], 0)),
    'u3-strategy-legal:2': ao(4, mc('A business cuts only its price but keeps premium packaging and exclusive stores. What is the most likely outcome?', [
      ['Mixed messages confuse customers and weaken the brand image', 'Correct.'],
      ['Higher profit per unit, since the price now matches the packaging', 'Lower price, lower margin.'],
      ['A stronger premium image, since a low price signals great value', 'Conflicts with premium image.'],
      ['No effect, since customers never connect price with brand image', 'They do.'],
    ], 0)),
    'u3-strategy-legal:5': ao(4, mc('Which is a likely benefit of consumer-protection laws for honest businesses?', [
      ['Dishonest rivals cannot gain an unfair edge by making false claims', 'Correct.'],
      ['Honest firms no longer need to test or check their products at all', 'They still do.'],
      ['Honest firms can set any price they like without competition from rivals', 'Not true.'],
      ['Honest firms are exempt from the cost of obeying other laws', 'Not true.'],
    ], 0)),
    'u3-strategy-legal:6': ao(4, mc('A firm uses the same advert worldwide, but in one country the slogan translates into an offensive phrase. Which weakness does this show?', [
      ['A lack of knowledge of cultural and language differences', 'Correct.'],
      ['A lack of money to pay for advertising in that country', 'Not shown.'],
      ['A lack of products to supply customers in that country', 'Not shown.'],
      ['A lack of competition that makes customers dislike the brand', 'Not shown.'],
    ], 0)),
    'u3-strategy-legal:7': ao(3, mc('A company exports to five countries. One country’s economy collapses, but total sales fall only 5%. Which benefit does this show?', [
      ['Spreading risk across several markets', 'Correct.'],
      ['Economies of scale from producing for a single large market', 'One market.'],
      ['Higher prices from reduced competition in a niche market', 'Not shown.'],
      ['Lower tariffs on goods because they cross fewer borders', 'Not shown.'],
    ], 0)),
    'u3-strategy-legal:c0.0': ao(3, mc('A budget furniture brand sells flat-pack items at low prices in large out-of-town stores with bold adverts. What do the four Ps show?', [
      ['All four support a consistent value-for-money image', 'Correct.'],
      ['The price conflicts with the place chosen for selling the product', 'They fit together.'],
      ['The promotion conflicts with the product’s low-price positioning', 'They fit together.'],
      ['The product conflicts with the target customers’ expectations', 'They fit together.'],
    ], 0)),
    'u3-strategy-legal:c2.0': ao(4, mc('A sports brand wants to enter Japan, where it has no experience. Which first step is best justified?', [
      ['Research culture, laws and competitors, then test with a small launch', 'Correct.'],
      ['Launch nationally at once, so that rivals have no time to respond', 'Risky.'],
      ['Copy the home advert exactly, so that the brand message is the same', 'Culture may differ.'],
      ['Wait for a rival to fail, so the firm can learn from its mistakes', 'Passive.'],
    ], 0)),
    'u3-strategy-legal:c3.0': ao(3, mc('An advert claims a product is “100% natural”, but tests show artificial additives. What is the most likely consequence?', [
      ['Legal action or fines, and damage to customers’ trust in the brand', 'Correct.'],
      ['Higher sales, since customers do not check claims made in adverts', 'Not likely.'],
      ['Lower costs, since the firm saves on testing natural ingredients', 'Not the consequence.'],
      ['No effect, since advertising claims are never covered by any law', 'Covered by law.'],
    ], 0)),
    'u3-strategy-legal:c4.0': ao(4, mc('A firm must test every batch of toys for safety under a new law, adding $0.40 per toy. Which evaluation is best?', [
      ['It raises costs but protects customers and the firm’s reputation', 'Correct.'],
      ['It cuts costs, since testing removes the need for any recalls', 'It adds cost.'],
      ['It has no effect on price, since firms cannot pass on extra costs', 'They often do.'],
      ['It harms only large firms, since small firms are exempt from safety law', 'Not true.'],
    ], 0)),
    'u3-strategy-legal:c6.0': ao(3, mc('A cosmetics firm claims “Proven to remove wrinkles in 7 days” with no evidence. What does consumer-protection law require?', [
      ['Customers are protected from false claims, so the firm must be able to prove them', 'Correct.'],
      ['Customers must test every product before they are allowed to buy it', 'Not required.'],
      ['Firms may say anything in adverts as long as their prices are fair', 'False claims are not allowed.'],
      ['Firms must lower their prices whenever they make a claim in an advert', 'Not required.'],
    ], 0)),
  },

  add: {
    'u3-market': [
      match('Match each term to its meaning.', [
        ['Market share', 'A firm’s sales as a percentage of total market sales'],
        ['Market segment', 'A group of customers with similar needs'],
        ['Niche market', 'A small, specialised part of a larger market'],
        ['Mass market', 'A large market of customers with similar needs'],
      ]),
      short('Define the term “market segmentation”.', {
        kind: 'Definition',
        points: ['Dividing a market into groups', 'of customers with similar needs or characteristics'],
        model: 'Market segmentation is dividing a market into groups of customers who share similar needs or characteristics.',
      }),
    ],
    'u3-research': [
      match('Match each research term to its meaning.', [
        ['Primary research', 'Data collected first-hand by the firm for its own purpose'],
        ['Secondary research', 'Existing data that was collected by someone else'],
        ['Sample', 'A small group chosen to represent the whole market'],
        ['Focus group', 'A group discussion that explores opinions in depth'],
      ]),
      multi('Which are advantages of secondary research? Select all that apply.', [
        ['It is usually cheaper and quicker to obtain', 'Data already exists.', true],
        ['It can cover a large area or time period', 'Often broad.', true],
        ['It is designed for the firm’s exact question', 'Often not specific.', false],
        ['The firm controls how the data was collected', 'Collected by others.', false],
      ]),
      short('Explain one reason why a firm uses a sample, not the whole market, in research.', {
        command: 'Explain',
        points: ['Asking everyone would cost too much or take too long', 'A representative sample can give a reasonably reliable picture'],
        model: 'Asking every customer would be too slow and expensive. A well-chosen sample is cheaper and quicker and can still give a reliable picture of the whole market.',
      }),
    ],
    'u3-product-price': [
      cloze('Complete the sentences.', 'The stages of the product life cycle are introduction, ___, maturity and ___. Setting a high price on launch is price ___.', ['growth', 'decline', 'skimming'], ['penetration', 'extension']),
      match('Match the pricing method to its description.', [
        ['Cost-plus', 'Adds a fixed mark-up to the unit cost'],
        ['Penetration', 'Low price at launch to win market share'],
        ['Skimming', 'High price at launch for early buyers'],
        ['Competitive', 'Price set close to rivals’ prices'],
      ]),
      short('Explain one reason a firm might use an extension strategy.', {
        command: 'Explain',
        points: ['Sales are levelling or starting to fall', 'The strategy (new version, new market or new use) lifts or prolongs sales'],
        model: 'When sales begin to fall, a firm can launch a new version or enter a new market. This lifts sales and lengthens the product’s life cycle.',
      }),
    ],
    'u3-place-promotion': [
      match('Match each promotion method to an example.', [
        ['Sales promotion', 'Buy one, get one free this week'],
        ['Advertising', 'A paid advert on social media'],
        ['Sponsorship', 'A firm’s name on a football shirt'],
        ['Public relations', 'A press release about a charity donation'],
      ]),
      multi('Which are channels of distribution? Select all that apply.', [
        ['Producer to retailer to consumer', 'A common channel.', true],
        ['Producer to wholesaler to retailer to consumer', 'A longer channel.', true],
        ['Producer to consumer (direct selling)', 'The shortest channel.', true],
        ['Consumer to producer to wholesaler only', 'Not a distribution channel.', false],
      ]),
    ],
    'u3-strategy-legal': [
      cloze('Complete the sentence.', 'The marketing mix is made up of product, ___, place and ___.', ['price', 'promotion'], ['people', 'profit']),
      short('Explain one way consumer-protection laws help customers.', {
        command: 'Explain',
        points: ['Names a law’s effect (for example banning false claims or unsafe goods)', 'Customers are protected from harm or from being misled'],
        model: 'Consumer-protection laws ban false claims and unsafe goods, so customers are not misled and are protected from harm.',
      }),
    ],
  },
};
