begin transaction;
INSERT INTO public.bars(name, addr, license) VALUES ('Caribean Bar','Freriksborggade', 12345);
INSERT INTO public.bars(name, addr, license) VALUES ('Joe''’s Bar',null, null);
INSERT INTO public.bars(name, addr, license) VALUES ('Bar Bar',null, null);
INSERT INTO public.beers(name,manf) VALUES ('Bud','Pete’''s');
INSERT INTO public.beers(name,manf) VALUES ('Miller','DIKU');
INSERT INTO public.drinkers(name, addr, phone) VALUES ('Fred',null,null);
INSERT INTO public.drinkers(name, addr, phone) VALUES ('Sally',null,null);
INSERT INTO public.frequents(drinker , bar ) VALUES ('Sally','Joe''’s Bar');
INSERT INTO public.likes(drinker , beer)VALUES ('Sally','Bud');
INSERT INTO public.sells( bar, beer, price) VALUES ('Joe''’s Bar', 'Bud', 22);
INSERT INTO public.sells( bar, beer, price) VALUES ('Bar Bar', 'Miller', 22);
INSERT INTO public.sells( bar, beer, price) VALUES ('Bar Bar', 'Bud', 18);
INSERT INTO public.sells( bar, beer, price) VALUES ('Caribean Bar', 'Miller', 17);
commit;